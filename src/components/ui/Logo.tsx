import React from 'react';

export const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {/* Text part */}
      <div className="flex text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] font-black tracking-[0.12em] font-sans">
        <span style={{ color: '#394A98' }}>EUROPEAN</span>
        <span style={{ color: '#F1C71B' }}>ERA</span>
      </div>
      
      {/* Emblem part */}
      <svg 
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] flex-shrink-0" 
        viewBox="0 0 60 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(30, 30)">
          {/* Top Star */}
          <path transform="translate(0, -22) scale(0.7)" d="M0 -8 L1.8 -2.4 L7.6 -2.4 L2.9 1 L4.7 6.5 L0 3 L-4.7 6.5 L-2.9 1 L-7.6 -2.4 L-1.8 -2.4 Z" fill="#F1C71B"/>
          {/* Left Star */}
          <path transform="translate(-23, 3) scale(0.7)" d="M0 -8 L1.8 -2.4 L7.6 -2.4 L2.9 1 L4.7 6.5 L0 3 L-4.7 6.5 L-2.9 1 L-7.6 -2.4 L-1.8 -2.4 Z" fill="#F1C71B"/>
          {/* Right Star */}
          <path transform="translate(23, 3) scale(0.7)" d="M0 -8 L1.8 -2.4 L7.6 -2.4 L2.9 1 L4.7 6.5 L0 3 L-4.7 6.5 L-2.9 1 L-7.6 -2.4 L-1.8 -2.4 Z" fill="#F1C71B"/>
          
          {/* Blue Rectangle */}
          <rect x="-12" y="-12" width="24" height="30" fill="#394A98" />
          
          {/* Yellow Stripes */}
          <rect x="-8" y="-7" width="16" height="4.5" fill="#F1C71B" />
          <rect x="-8" y="0.5" width="16" height="4.5" fill="#F1C71B" />
          <rect x="-8" y="8" width="16" height="4.5" fill="#F1C71B" />
        </g>
      </svg>
    </div>
  );
};
