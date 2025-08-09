import React from 'react';

/**
 * Props for the Card component.
 * - 'variant' determines the overall styling ('makeup-service' or 'customer-component').
 * - 'title' is for the main title of the card.
 * - 'duration' is for the text indicating the service duration.
 * - 'imgSrc' is the image source URL for the card.
 * - 'children' allows for flexible content to be passed inside the card body.
 * - 'buttonText' and 'onButtonClick' are for the action button at the bottom.
 */
type CardProps = {
  variant: 'makeup-service' | 'customer-component';
  title?: React.ReactNode;
  duration?: React.ReactNode;
  imgSrc?: string;
  buttonText?: string;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

export const Card = ({
  variant,
  title,
  duration,
  imgSrc,
  buttonText,
  onButtonClick,
  children,
}: CardProps) => {
  // Base classes for the card container, including rounded corners and transitions.
  const baseClasses = "bg-white rounded-2xl transition-all duration-200";

  // Specific classes for the 'makeup-service' and 'customer-component' variants.
  // Both variants have the same dimensions and layout.
  const variantClasses = "w-[380px] h-[539px] flex flex-col overflow-hidden rounded-2xl";

  // Conditionally add a drop shadow only to the 'customer-component' variant.
  const shadowClass = variant === 'customer-component' ? 'drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]' : '';

  return (
    <div className={`${baseClasses} ${variantClasses} ${shadowClass}`}>
      {/* The image is a key feature of both variants. */}
      {/* A placeholder is used if no image source is provided. */}
      <img
        src={imgSrc || 'https://placehold.co/380x430/e2e8f0/64748b?text=Image'}
        alt="Service"
        className="w-full h-[430px] object-cover rounded-t-2xl"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://placehold.co/380x430/e2e8f0/64748b?text=Image+Not+Found';
        }}
      />

      {/* The main card body, which holds the title, duration, and button. */}
      <div
        className={`p-5 flex-1 flex flex-col justify-start gap-4 h-[109px] ${
          // The 'makeup-service' variant has a unique background color.
          variant === 'makeup-service' ? 'bg-[#F9F2EB]' : ''
        }`}
      >
        {/* Title and duration are displayed side-by-side. */}
        <div className="flex justify-between items-center w-full">
          <h5 className="m-0 text-base font-normal uppercase text-black">{title}</h5>
          <span className="text-xs font-normal uppercase text-black">{duration}</span>
        </div>

        {children}

        {/* The action button at the bottom of the card. */}
        <div className="flex justify-between items-center w-full mt-auto">
          <button
            className="text-[#757575] bg-transparent border-none p-0 cursor-pointer"
            type="button"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
