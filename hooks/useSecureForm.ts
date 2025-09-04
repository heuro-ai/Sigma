import { useState, useCallback, useRef } from 'react';
import { SecurityUtils, CSRFProtection } from '../utils/security';
import { useSecurity } from '../contexts/SecurityContext';

interface SecureFormConfig<T> {
  initialValues: T;
  validationSchema?: Partial<Record<keyof T, (value: any) => { isValid: boolean; error?: string }>>;
  onSubmit: (values: T, helpers: FormHelpers) => Promise<void> | void;
  enableRateLimit?: boolean;
  rateLimitIdentifier?: string;
}

interface FormHelpers {
  setSubmitting: (isSubmitting: boolean) => void;
  setError: (error: string) => void;
  setFieldError: (field: string, error: string) => void;
}

export function useSecureForm<T extends Record<string, any>>(config: SecureFormConfig<T>) {
  const { rateLimiter, csrfToken } = useSecurity();
  const [values, setValues] = useState<T>(config.initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const submitAttempts = useRef(0);

  const validateField = useCallback((name: keyof T, value: any): string | undefined => {
    const validator = config.validationSchema?.[name];
    if (!validator) return undefined;

    const result = validator(value);
    return result.isValid ? undefined : result.error;
  }, [config.validationSchema]);

  const validateAllFields = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    Object.keys(values).forEach((key) => {
      const fieldName = key as keyof T;
      const error = validateField(fieldName, values[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validateField]);

  const setValue = useCallback((name: keyof T, value: any) => {
    setValues(prev => ({
      ...prev,
      [name]: SecurityUtils.sanitizeInput(String(value))
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  }, [errors]);

  const setFieldTouched = useCallback((name: keyof T, isTouched = true) => {
    setTouched(prev => ({
      ...prev,
      [name]: isTouched
    }));

    // Validate field when touched
    if (isTouched) {
      const error = validateField(name, values[name]);
      if (error) {
        setErrors(prev => ({
          ...prev,
          [name]: error
        }));
      }
    }
  }, [validateField, values]);

  const setFieldError = useCallback((field: string, error: string) => {
    setErrors(prev => ({
      ...prev,
      [field as keyof T]: error
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    if (config.enableRateLimit) {
      const identifier = config.rateLimitIdentifier || 'form_submit';
      if (!rateLimiter(identifier)) {
        setSubmitError('Too many submission attempts. Please wait before trying again.');
        return;
      }
    }

    // CSRF protection
    if (!csrfToken || !CSRFProtection.validateToken(csrfToken)) {
      setSubmitError('Security validation failed. Please refresh the page and try again.');
      return;
    }

    // Validation
    if (!validateAllFields()) {
      // Mark all fields as touched to show errors
      const allTouched: Partial<Record<keyof T, boolean>> = {};
      Object.keys(values).forEach(key => {
        allTouched[key as keyof T] = true;
      });
      setTouched(allTouched);
      return;
    }

    // Submission attempts tracking
    submitAttempts.current++;
    if (submitAttempts.current > 5) {
      setSubmitError('Too many failed attempts. Please refresh the page and try again.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    const helpers: FormHelpers = {
      setSubmitting: setIsSubmitting,
      setError: setSubmitError,
      setFieldError
    };

    try {
      await config.onSubmit(values, helpers);
      // Reset attempts on successful submission
      submitAttempts.current = 0;
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'An unexpected error occurred. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }, [
    config,
    rateLimiter,
    csrfToken,
    validateAllFields,
    values,
    setFieldError
  ]);

  const resetForm = useCallback(() => {
    setValues(config.initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setSubmitError('');
    submitAttempts.current = 0;
  }, [config.initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    submitError,
    setValue,
    setFieldTouched,
    setFieldError,
    handleSubmit,
    resetForm,
    isValid: Object.keys(errors).length === 0
  };
}