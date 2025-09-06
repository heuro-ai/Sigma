import React from 'react';
import { App } from '../App';
import { AboutPage } from './pages/AboutPage';
import { ComparePage } from './pages/ComparePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { NotFoundPage } from './pages/NotFoundPage';

// Simple client-side router with hash support
export const Router: React.FC = () => {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);
  const [currentHash, setCurrentHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      setCurrentHash(window.location.hash);
    };

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Navigate function for programmatic navigation
  const navigate = (path: string) => {
    console.log('Router - Navigating to:', path);
    
    // Handle hash routes (like /#solutions, /#security, /#roi)
    if (path.startsWith('/#')) {
      // If we're not on the home page, navigate to home first
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
        setCurrentPath('/');
      }
      
      // Set the hash
      window.location.hash = path.substring(1); // Remove the leading /
      setCurrentHash(path.substring(1));
      
      // Scroll to the element after a short delay
      setTimeout(() => {
        const elementId = path.substring(2); // Remove /# to get just the id
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Regular navigation
      window.history.pushState(null, '', path);
      setCurrentPath(path);
      setCurrentHash('');
    }
  };

  // Make navigate available globally for components
  React.useEffect(() => {
    (window as any).navigate = navigate;
  }, []);

  // Handle hash scrolling on page load/refresh
  React.useEffect(() => {
    if (currentHash && currentPath === '/') {
      setTimeout(() => {
        const elementId = currentHash.substring(1); // Remove # to get just the id
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500); // Longer delay for page load
    }
  }, [currentPath, currentHash]);

  const renderPage = () => {
    // Normalize the path by removing trailing slashes
    const normalizedPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');
    
    console.log('Router - Current path:', normalizedPath);
    console.log('Router - Current hash:', currentHash);
    
    switch (normalizedPath) {
      case '/':
        return <App />;
      case '/about':
        return <AboutPage />;
      case '/features':
        return <FeaturesPage />;
      case '/compare':
        return <ComparePage />;
      case '/pricing':
        return <PricingPage />;
      case '/faq':
        return <FAQPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms-of-service':
        return <TermsOfServicePage />;
      default:
        console.log('Router - No match found for:', normalizedPath, '- showing 404');
        return <NotFoundPage />;
    }
  };

  return <>{renderPage()}</>;
};

// Link component for navigation with hash support
interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, children, className, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
    console.log('Link - Navigating to:', to);
    (window as any).navigate?.(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};