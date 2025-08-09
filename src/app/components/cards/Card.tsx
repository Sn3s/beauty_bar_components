import React from 'react';

/**
 * Props for the unified Card component.
 * - 'variant' is now a required prop to determine the specific card style.
 * - 'imgSrc': The URL for the service image.
 * - 'title': The main title of the card.
 * - 'duration': Text indicating the service duration.
 * - 'buttonText' and 'onButtonClick': For the action button.
 * - 'children': Allows for flexible content inside the card body.
 */
type CardProps = {
  variant: 'makeup-service' | 'customer-component';
  imgSrc?: string;
  title?: React.ReactNode;
  duration?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

export const Card = ({
  variant,
  imgSrc,
  title,
  duration,
  buttonText,
  onButtonClick,
  children,
}: CardProps) => {
  // Determine the card's width based on the variant.
  const cardWidthClass = variant === 'customer-component' ? 'w-[430px]' : 'w-[380px]';

  // Determine the image's placeholder dimensions.
  const placeholderDimensions = variant === 'customer-component' ? '430x430' : '380x430';

  // Base classes for the card container.
  const baseClasses = `bg-white rounded-2xl transition-all duration-200 h-[539px] flex flex-col overflow-hidden ${cardWidthClass}`;

  // Conditional classes for the specific variant.
  const variantSpecificClasses = variant === 'customer-component' ? 'drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]' : '';

  // Conditional classes for the body content.
  const bodyClasses = `p-5 flex-1 flex flex-col justify-start gap-4 h-[109px] ${
    variant === 'makeup-service' ? 'bg-[#F9F2EB]' : ''
  }`;

  // Conditional placeholder text for the image alt and fallback URL.
  const placeholderText = variant === 'makeup-service' ? 'Makeup Service Image' : 'Customer Component Image';

  // --- Typography Configuration ---
  const titleTypography = {
    fontFamily: "font-['Owners_XWide']",
    weight: 'font-normal',
    style: 'not-italic',
    size: 'text-base',
    lineHeight: 'leading-normal',
    letterSpacing: 'tracking-normal',
    horizontalAlign: 'text-left',
    case: 'uppercase',
    color: 'text-black'
  };

  const durationTypography = variant === 'makeup-service' ? {
    fontFamily: "font-['Owners_XWide']",
    weight: 'font-normal',
    style: 'not-italic',
    size: 'text-xs',
    lineHeight: 'leading-normal',
    letterSpacing: 'tracking-normal',
    horizontalAlign: 'text-center',
    case: 'uppercase',
    color: 'text-black'
  } : {
    fontFamily: "font-['Owners_XWide']",
    weight: 'font-normal',
    style: 'not-italic',
    size: 'text-base',
    lineHeight: 'leading-normal',
    letterSpacing: 'tracking-normal',
    horizontalAlign: 'text-center',
    case: 'uppercase',
    color: 'text-black'
  };

  const buttonTypography = {
    fontFamily: "font-['Owners_XWide']",
    weight: 'font-normal',
    style: 'not-italic',
    size: 'text-base',
    lineHeight: 'leading-normal',
    letterSpacing: 'tracking-normal',
    horizontalAlign: 'text-center',
    case: 'capitalize',
    color: 'text-[#757575]'
  };

  const titleClasses = `${titleTypography.weight} ${titleTypography.size} ${titleTypography.case} ${titleTypography.color}`;
  const durationClasses = `${durationTypography.weight} ${durationTypography.size} ${durationTypography.case} ${durationTypography.color}`;
  const buttonClasses = `${buttonTypography.color} bg-transparent border-none p-0 cursor-pointer`;

  return (
    <div className={`${baseClasses} ${variantSpecificClasses}`}>
      {/* Service image with a placeholder fallback */}
      <img
        src={imgSrc || `https://placehold.co/${placeholderDimensions}/e2e8f0/64748b?text=${placeholderText.replace(/\s/g, '+')}`}
        alt={placeholderText}
        className="w-full h-[430px] object-cover rounded-t-2xl"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = `https://placehold.co/${placeholderDimensions}/e2e8f0/64748b?text=Image+Not+Found`;
        }}
      />
      {/* Card body */}
      <div className={bodyClasses}>
        <div className="flex justify-between items-start w-full">
          <h5 className={titleClasses}>{title}</h5>
          <span className={durationClasses}>{duration}</span>
        </div>
        {children}
        <div className="flex justify-between items-start w-full mt-auto">
          <button
            className={buttonClasses}
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
