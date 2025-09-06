
import React from 'react';
import { NAV_LINKS } from '../constants';
import { Logo } from './IconComponents';
import { Link } from './Router';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-sigma-midnight/80 backdrop-blur-lg border-b border-graphite/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center gap-8">
        <Link to="/" className="flex items-center space-x-2">
          <Logo className="h-6 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} to={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
              {link.name}
            </Link>
          ))}
          <Link to="/pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
            Pricing
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
            About
          </Link>
        </nav>
        <div className="hidden md:block">
        <button
          onClick={onContactClick}
            className="bg-white text-sigma-midnight font-semibold text-sm py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
        >
          Contact Sales
        </button>
        </div>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};
