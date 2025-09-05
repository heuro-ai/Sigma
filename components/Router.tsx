import React from 'react';
import { App } from '../App';
import { AboutPage } from './pages/AboutPage';
import { ComparePage } from './pages/ComparePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { NotFoundPage } from './pages/NotFoundPage';

// Simple client-side router
export const Router: React.FC = () => {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigate function for programmatic navigation
  const navigate = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
  };

  // Make navigate available globally for components
  React.useEffect(() => {
    (window as any).navigate = navigate;
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <App />;
      case '/about':
        return <AboutPage />;
      case '/features':
        return <FeaturesPage />;
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
        return <NotFoundPage />;
    }
  };

  return <>{renderPage()}</>;
};

// Link component for navigation
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
    (window as any).navigate?.(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};