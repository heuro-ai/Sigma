import React from 'react';
import { Logo } from '../IconComponents';
import { Link } from '../Router';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-sigma-midnight text-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8">
          <Logo className="h-12 w-auto mx-auto" />
        </div>
        
        {/* 404 Error */}
        <div className="mb-8">
          <h1 className="text-8xl font-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-pulse-violet mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-300 text-lg">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="bg-ocean-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-ocean-teal/90 transition">
              🏠 Go Home
            </Link>
            <Link to="/about" className="bg-graphite text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 border border-white/20 transition">
              📖 About Us
            </Link>
            <Link to="/compare" className="bg-graphite text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 border border-white/20 transition">
              ⚖️ Compare Plans
            </Link>
            <Link to="/faq" className="bg-graphite text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 border border-white/20 transition">
              ❓ FAQ
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-graphite p-6 rounded-xl border border-white/10">
          <h3 className="text-xl font-bold mb-4">Need Help?</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center justify-center gap-3">
              <span>📧</span>
              <a href="mailto:entrepreneurtoolbit@gmail.com" className="text-neon-cyan hover:text-ocean-teal">
                entrepreneurtoolbit@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span>📱</span>
              <a href="https://wa.me/+919999999999" className="text-neon-cyan hover:text-ocean-teal" target="_blank" rel="noopener noreferrer">
                WhatsApp: +91-9999999999
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span>💬</span>
              <Link to="/contact" className="text-neon-cyan hover:text-ocean-teal">
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 text-sm text-gray-400">
          <p>Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link to="/pricing" className="hover:text-neon-cyan transition">Pricing</Link>
            <Link to="/case-studies" className="hover:text-neon-cyan transition">Case Studies</Link>
            <Link to="/blog" className="hover:text-neon-cyan transition">Blog</Link>
            <Link to="/privacy-policy" className="hover:text-neon-cyan transition">Privacy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};