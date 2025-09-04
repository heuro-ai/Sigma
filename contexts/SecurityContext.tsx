import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { SecurityUtils, CSRFProtection } from '../utils/security';

interface SecurityState {
  isAuthenticated: boolean;
  user: User | null;
  csrfToken: string | null;
  sessionId: string | null;
}

interface User {
  id: string;
  email: string;
  role: 'admin' | 'user' | 'viewer';
  permissions: string[];
}

interface SecurityContextType extends SecurityState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  validateSession: () => Promise<boolean>;
  refreshToken: () => Promise<boolean>;
  hasPermission: (permission: string) => boolean;
  rateLimiter: (identifier: string) => boolean;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

// Rate limiter for API calls (5 requests per minute per user)
const apiRateLimiter = SecurityUtils.createRateLimiter(5, 60000);

export const SecurityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [securityState, setSecurityState] = useState<SecurityState>({
    isAuthenticated: false,
    user: null,
    csrfToken: null,
    sessionId: null
  });

  // Initialize security context
  useEffect(() => {
    const initSecurity = async () => {
      try {
        // Generate CSRF token
        const csrfToken = CSRFProtection.generateToken();
        
        // For this demo app, we'll skip authentication checks to avoid loading issues
        // In production, you would implement proper session validation
        setSecurityState(prev => ({ 
          ...prev, 
          csrfToken,
          isAuthenticated: false,
          user: null,
          sessionId: null
        }));
      } catch (error) {
        console.error('Security initialization error:', error);
        // Fallback to minimal security state
        setSecurityState(prev => ({ 
          ...prev, 
          csrfToken: 'fallback-token',
          isAuthenticated: false,
          user: null,
          sessionId: null
        }));
        }
      }
    };

    initSecurity();
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    try {
      // Validate inputs
      if (!SecurityUtils.isValidEmail(email)) {
        throw new Error('Invalid email format');
      }

      const passwordValidation = SecurityUtils.validatePasswordStrength(password);
      if (!passwordValidation.isValid) {
        throw new Error('Password does not meet security requirements');
      }

      // Rate limiting for login attempts
      if (!apiRateLimiter(`login_${email}`)) {
        throw new Error('Too many login attempts. Please try again later.');
      }

      // Mock authentication - replace with real API call
      const response = await mockAuthenticateUser(email, password);
      
      if (response.success) {
        const sessionId = SecurityUtils.generateNonce();
        
        // Store session securely
        sessionStorage.setItem('sigma_session_id', sessionId);
        sessionStorage.setItem('sigma_user_token', response.token);
        
        setSecurityState(prev => ({
          ...prev,
          isAuthenticated: true,
          user: response.user,
          sessionId
        }));

        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    // Clear session storage
    sessionStorage.removeItem('sigma_session_id');
    sessionStorage.removeItem('sigma_user_token');
    
    // Reset state
    setSecurityState(prev => ({
      ...prev,
      isAuthenticated: false,
      user: null,
      sessionId: null
    }));
  }, []);

  const validateSession = useCallback(async (): Promise<boolean> => {
    const { sessionId } = securityState;
    if (!sessionId) return false;

    try {
      // Mock session validation - replace with real API call
      const isValid = await mockValidateSession(sessionId);
      
      if (!isValid) {
        logout();
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Session validation error:', error);
      logout();
      return false;
    }
  }, [securityState.sessionId, logout]);

  const refreshToken = useCallback(async (): Promise<boolean> => {
    try {
      const { sessionId } = securityState;
      if (!sessionId) return false;

      // Mock token refresh - replace with real API call
      const response = await mockRefreshToken(sessionId);
      
      if (response.success) {
        sessionStorage.setItem('sigma_user_token', response.token);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Token refresh error:', error);
      return false;
    }
  }, [securityState.sessionId]);

  const hasPermission = useCallback((permission: string): boolean => {
    return securityState.user?.permissions.includes(permission) ?? false;
  }, [securityState.user]);

  const rateLimiter = useCallback((identifier: string): boolean => {
    return apiRateLimiter(identifier);
  }, []);

  const value: SecurityContextType = {
    ...securityState,
    login,
    logout,
    validateSession,
    refreshToken,
    hasPermission,
    rateLimiter
  };

  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = (): SecurityContextType => {
  const context = useContext(SecurityContext);
  if (context === undefined) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};

// Mock functions - replace with real API calls
async function mockAuthenticateUser(email: string, password: string) {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
  
  // Mock successful authentication
  return {
    success: true,
    token: 'mock.jwt.token',
    user: {
      id: '1',
      email,
      role: 'admin' as const,
      permissions: ['read', 'write', 'admin']
    }
  };
}

async function mockValidateSession(sessionId: string): Promise<boolean> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return sessionId.length > 0; // Simple validation
}

async function mockRefreshToken(sessionId: string) {
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    success: true,
    token: 'new.jwt.token'
  };
}

async function validateStoredSession(sessionId: string, token: string): Promise<boolean> {
  // Validate session and token format
  return sessionId.length > 0 && SecurityUtils.isValidToken(token);
}

function parseUserFromToken(token: string): User | null {
  try {
    // Mock token parsing - replace with real JWT parsing
    return {
      id: '1',
      email: 'user@example.com',
      role: 'admin',
      permissions: ['read', 'write', 'admin']
    };
  } catch {
    return null;
  }
}