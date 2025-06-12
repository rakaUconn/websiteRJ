import React from 'react';

interface SectionLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
}

export default function SectionLayout({ 
  children, 
  title, 
  subtitle, 
  id, 
  className = '',
  background = 'white'
}: SectionLayoutProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-r from-blue-900 to-indigo-900'
  };

  const textColorClasses = {
    white: 'text-gray-900',
    gray: 'text-gray-900',
    gradient: 'text-white'
  };

  return (
    <section 
      id={id} 
      className={`py-16 ${backgroundClasses[background]} ${className}`}
    >
      <div className="container mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColorClasses[background]}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg max-w-3xl mx-auto ${
                background === 'gradient' ? 'text-blue-200' : 'text-gray-600'
              }`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
