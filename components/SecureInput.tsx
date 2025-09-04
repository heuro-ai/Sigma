import React, { useState, useCallback } from 'react';
import { SecurityUtils } from '../utils/security';

interface SecureInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (value: string, isValid: boolean) => void;
  validation?: 'email' | 'phone' | 'url' | 'custom';
  customValidator?: (value: string) => { isValid: boolean; error?: string };
  sanitize?: boolean;
  maxLength?: number;
  label?: string;
  error?: string;
  showStrengthMeter?: boolean; // For password inputs
}

export const SecureInput: React.FC<SecureInputProps> = ({
  value,
  onChange,
  validation,
  customValidator,
  sanitize = true,
  maxLength = 500,
  label,
  error,
  showStrengthMeter = false,
  type = 'text',
  className = '',
  ...props
}) => {
  const [internalError, setInternalError] = useState<string>('');
  const [isTouched, setIsTouched] = useState(false);

  const validateInput = useCallback((inputValue: string): { isValid: boolean; error?: string } => {
    // Length validation
    if (inputValue.length > maxLength) {
      return { isValid: false, error: `Input exceeds maximum length of ${maxLength} characters` };
    }

    // Built-in validation types
    switch (validation) {
      case 'email':
        if (inputValue && !SecurityUtils.isValidEmail(inputValue)) {
          return { isValid: false, error: 'Invalid email format' };
        }
        break;
      case 'phone':
        if (inputValue && !SecurityUtils.isValidPhone(inputValue)) {
          return { isValid: false, error: 'Invalid phone number format' };
        }
        break;
      case 'url':
        if (inputValue && !SecurityUtils.isValidUrl(inputValue)) {
          return { isValid: false, error: 'Invalid URL format' };
        }
        break;
    }

    // Custom validation
    if (customValidator) {
      return customValidator(inputValue);
    }

    return { isValid: true };
  }, [validation, customValidator, maxLength]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Sanitize input if enabled
    if (sanitize) {
      inputValue = SecurityUtils.sanitizeInput(inputValue);
    }

    // Validate input
    const validationResult = validateInput(inputValue);
    setInternalError(validationResult.error || '');

    // Call parent onChange with sanitized value and validation status
    onChange(inputValue, validationResult.isValid);
  }, [sanitize, validateInput, onChange]);

  const handleBlur = useCallback(() => {
    setIsTouched(true);
  }, []);

  const getPasswordStrength = useCallback((password: string) => {
    const validation = SecurityUtils.validatePasswordStrength(password);
    let strength = 0;
    let color = 'bg-vital-red';
    
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    if (strength <= 2) {
      color = 'bg-vital-red';
    } else if (strength <= 3) {
      color = 'bg-warm-amber';
    } else {
      color = 'bg-calm-mint';
    }

    return { strength, color, validation };
  }, []);

  const displayError = error || (isTouched && internalError);
  const inputClasses = `w-full bg-graphite border rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition ${
    displayError 
      ? 'border-vital-red focus:ring-vital-red/50' 
      : 'border-white/20 focus:ring-neon-cyan'
  } ${className}`;

  const passwordStrength = showStrengthMeter && type === 'password' && value 
    ? getPasswordStrength(value) 
    : null;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-1">
          {label}
          {props.required && <span className="text-vital-red ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          {...props}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={maxLength}
          className={inputClasses}
        />
        
        {/* Character count indicator */}
        {value && (
          <div className="absolute right-2 top-2 text-xs text-gray-500">
            {value.length}/{maxLength}
          </div>
        )}
      </div>

      {/* Password strength meter */}
      {passwordStrength && (
        <div className="mt-2">
          <div className="flex space-x-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded ${
                  i < passwordStrength.strength 
                    ? passwordStrength.color 
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          {passwordStrength.validation.errors.length > 0 && (
            <div className="text-xs text-gray-400 space-y-1">
              {passwordStrength.validation.errors.map((err, i) => (
                <div key={i}>• {err}</div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Error message */}
      {displayError && (
        <p className="text-vital-red text-xs mt-1 flex items-center">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {displayError}
        </p>
      )}
    </div>
  );
};