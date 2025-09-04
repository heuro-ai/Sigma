
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-12 h-12 bg-graphite rounded-full flex items-center justify-center mb-4 border border-white/10 group-hover:border-neon-cyan transition-colors">
    {children}
  </div>
);

export const HeartIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pulse-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
    </IconWrapper>
);

export const MoonIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pulse-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
    </IconWrapper>
);

export const ActivityIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pulse-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h.007v.007H3.75V12zm.75 3h.007v.007H4.5v-.007zm.75-6h.007v.007H5.25v-.007zm1.5-3h.007v.007H6.75V6zm.75 9h.007v.007H7.5v-.007zm1.5-6h.007v.007H9V9zm.75 6h.007v.007h-.007v-.007zm1.5-9h.007v.007h-.007V6zm-3 9h.007v.007H9v-.007zm3-3h.007v.007h-.007v-.007zm-1.5 6h.007v.007h-.007v-.007zm3-9h.007v.007h-.007V9zm-9 6h.007v.007H6v-.007zm3-3h.007v.007H9v-.007zm3 3h.007v.007h-.007v-.007zm3-6h.007v.007h-.007V9zm-3 9h.007v.007h-.007v-.007zm3-3h.007v.007h-.007v-.007zm1.5-6h.007v.007h-.007V6zm-3 9h.007v.007h-.007v-.007zm3-3h.007v.007h-.007v-.007z" />
        </svg>
    </IconWrapper>
);

export const BrainIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pulse-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 00-1.635-1.635L12.75 18l1.188-.648a2.25 2.25 0 001.635-1.635L16.25 15l.648 1.188a2.25 2.25 0 001.635 1.635L19.75 18l-1.188.648a2.25 2.25 0 00-1.635 1.635z" />
        </svg>
    </IconWrapper>
);

export const CpuChipIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pulse-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12H21m-18 0h1.5m15 0h1.5m-15 0h1.5M12 4.5v15m-3.75-15h7.5" />
        </svg>
    </IconWrapper>
);

export const ShieldIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pulse-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
        </svg>
    </IconWrapper>
);

export const UserGroupIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pulse-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.964A3 3 0 0012 15a3 3 0 00-1.559-2.65m-1.358-2.65A3 3 0 006 15a3 3 0 00-1.559-2.65m11.119-2.964A3 3 0 0018 9a3 3 0 00-1.559-2.65M12 3.75a3 3 0 00-1.559 2.65m-1.358 2.65A3 3 0 006 9a3 3 0 00-1.559 2.65m1.559 0A3 3 0 006 12a3 3 0 001.559 2.65m0 0A3 3 0 009 18a3 3 0 001.559-2.65m1.559 0A3 3 0 0012 12a3 3 0 001.559 2.65m0 0A3 3 0 0015 18a3 3 0 001.559-2.65m1.559 0A3 3 0 0018 12a3 3 0 001.559-2.65m-1.559 0A3 3 0 0018 6a3 3 0 00-1.559-2.65m-1.559 0A3 3 0 0015 3a3 3 0 00-1.559 2.65" />
        </svg>
    </IconWrapper>
);

export const ChartBarIcon = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pulse-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
    </IconWrapper>
);

// Other icons for use outside of feature cards
export const Logo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Inter Tight" fontSize="24" fontWeight="bold" letterSpacing="0.025em">
        <tspan x="0" y="22.5">Sigma Life</tspan>
      </text>
    </svg>
);

export const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-calm-mint" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
