import React from 'react';

interface GradientBackgroundProps {
    children: React.ReactNode;
    className?: string;
    fromColor?: string;
    toColor?: string;
    direction?: 'to-t' | 'to-b' | 'to-l' | 'to-r' | 'to-tl' | 'to-tr' | 'to-bl' | 'to-br';
  }

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center pt-8">
      {children}
    </div>
  );
};

export default GradientBackground;