
import React from 'react';
import { Logo } from './IconComponents';
import { Link } from './Router';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-graphite">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo className="h-8 w-auto" />
            <p className="mt-4 text-sm text-gray-400">Empowering healthier, more productive workforces.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/#features" className="text-gray-400 hover:text-white text-sm">Features</Link></li>
              <li><Link to="/compare" className="text-gray-400 hover:text-white text-sm">Compare</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white text-sm">Pricing</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white text-sm">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="mailto:entrepreneurtoolbit@gmail.com" className="text-gray-400 hover:text-white text-sm">📧 Email Us</a></li>
              <li><a href="https://wa.me/+919999999999" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm">💬 WhatsApp</a></li>
              <li><span className="text-gray-400 text-sm">📱 +91-9999999999</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; 2025 Sigma Life. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
