import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export default function PageLayout({ 
  children, 
  title, 
  description, 
  className = '' 
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {(title || description) && (
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 py-8">
            {title && (
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            )}
            {description && (
              <p className="text-lg text-gray-600 max-w-3xl">{description}</p>
            )}
          </div>
        </div>
      )}
      <main className="container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}
