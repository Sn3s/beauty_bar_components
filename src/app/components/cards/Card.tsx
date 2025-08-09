import React from 'react';

/**
 * Props for the generic Card component.
 * @param {string} className - Optional Tailwind CSS classes for the card container.
 * @param {React.ReactNode} header - The content for the card's header section (complex JSX). Optional.
 * @param {string} title - The main title of the card's header section (simple string). Optional.
 * @param {React.ReactNode} footer - The content for the card's footer section. Optional.
 * @param {React.ReactNode} children - The main content of the card.
 */
type CardProps = {
  className?: string;
  title?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

export const Card = ({
  className = '',
  title,
  header,
  footer,
  children,
}: CardProps) => {

  const baseCardClasses = `
    bg-white
    shadow-lg
    rounded-xl
    overflow-hidden
    p-6
    flex flex-col
    gap-4
  `;

  const combinedClasses = `${baseCardClasses} ${className}`;

  return (
    <div className={combinedClasses}>
      {/* Optional Header Section */}
      {(header || title) && (
        <div className="pb-4">
            {header}
            {title && <h3 className="text-xl font-bold">{title}</h3>}
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-grow">
        {children}
      </div>

      {/* Optional Footer Section */}
      {footer && (
        <div className="pt-4">
          {footer}
        </div>
      )}
    </div>
  );
};
