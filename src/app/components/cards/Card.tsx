import React from 'react';

/**
 * Props for the generic Card component.
 * @param {string} className - Optional Tailwind CSS classes for the card container.
 * @param {string} title - The main title of the card's header section (simple string). Optional.
 * @param {string} subTitle - The subtitle of the card's header section (simple string). Optional.
 * @param {React.ReactNode} header - The content for the card's header section (complex JSX). Optional.
 * @param {React.ReactNode} footer - The content for the card's footer section. Optional.
 * @param {React.ReactNode} children - The main content of the card.
 */
type CardProps = {
  className?: string;
  title?: string;
  subTitle?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

export const Card = ({
  className = '',
  title,
  subTitle,
  header,
  footer,
  children,
}: CardProps) => {

  // --- Typography & Style Configuration ---
  const titleTypography = {
    fontFamily: "font-['Owners_XWide']",
    weight: 'font-bold',
    size: 'text-3xl',
    case: 'uppercase',
    horizontalAlign: 'text-center',
    color: 'text-black',
  };

  const subTitleTypography = {
    fontFamily: "font-['Owners_XWide']",
    size: 'text-xs',
    weight: 'font-normal',
    lineHeight: 'leading-[20px]',
    letterSpacing: 'tracking-[-0.5px]',
    horizontalAlign: 'text-center',
    color: 'text-[#757575]'
  };

  const headerContainerTypography = {
    fontFamily: "font-['Owners_XWide']",
    size: 'text-base',
    padding: 'pb-4',
    borderColor: 'border-gray-200'
  };
  
  const footerContainerTypography = {
    fontFamily: "font-['Owners_XWide']",
    padding: 'pt-4',
    borderColor: 'border-gray-200'
  };

  const contentContainerTypography = {
    fontFamily: "font-['Owners_XWide']",
    grow: 'flex-grow',
  };

  const baseCardClasses = `
    bg-white
    shadow-lg
    rounded-xl
    overflow-hidden
    p-6
    flex flex-col
    gap-4
  `;

  // --- Building Class Strings from Typography Objects ---
  const titleClasses = Object.values(titleTypography).join(' ');
  const subTitleClasses = Object.values(subTitleTypography).join(' ');
  const headerContainerClasses = Object.values(headerContainerTypography).join(' ');
  const footerContainerClasses = Object.values(footerContainerTypography).join(' ');
  const contentClasses = Object.values(contentContainerTypography).join(' ');
  const combinedCardClasses = `${baseCardClasses} ${className}`;

  return (
    <div className={combinedCardClasses}>
      {/* Optional Header Section */}
      {(header || title) && (
        <div className={headerContainerClasses}>
            {header}
            {title && <h3 className={titleClasses}>{title}</h3>}
            {subTitle && <p className={subTitleClasses}>{subTitle}</p>}
        </div>
      )}

      {/* Main Content Area */}
      <div className={contentClasses}>
        {children}
      </div>

      {/* Optional Footer Section */}
      {footer && (
        <div className={footerContainerClasses}>
          {footer}
        </div>
      )}
    </div>
  );
};
