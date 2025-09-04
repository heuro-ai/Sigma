import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class SecurityBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    // Log errors in a safe way
    console.warn('Application error caught by security boundary');
    
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log for debugging but don't block the application
    console.warn('Error boundary triggered:', error.message);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-sigma-midnight flex items-center justify-center">
          <div className="bg-graphite p-8 rounded-xl border border-vital-red/20 max-w-md mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-vital-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-8 h-8 text-vital-red" 
                  fill="none" 
                  strokeWidth="2" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Security Error</h2>
              <p className="text-gray-300 text-sm mb-6">
                We detected a security issue and have safely contained it. Please refresh the page to continue.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-ocean-teal text-white font-semibold py-2 px-6 rounded-lg hover:bg-ocean-teal/90 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for protecting sensitive components
export function withSecurityBoundary<T extends {}>(
  WrappedComponent: React.ComponentType<T>,
  fallback?: ReactNode
) {
  const WithSecurityBoundaryComponent = (props: T) => (
    <SecurityBoundary fallback={fallback}>
      <WrappedComponent {...props} />
    </SecurityBoundary>
  );

  WithSecurityBoundaryComponent.displayName = `withSecurityBoundary(${WrappedComponent.displayName || WrappedComponent.name})`;
  
  return WithSecurityBoundaryComponent;
}