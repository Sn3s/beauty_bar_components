import React from 'react';

// - 'variant' determines the overall styling ('default' or 'makeup-service' or 'customer-component' or 'skin-service').
// - 'header' is for the text content in the card header.
// - 'title' is for the main title of the card.
// - 'text' is for the main paragraph text in the card body.
// - 'imgSrc' is specifically for the 'makeup-service' and 'skin-service' card's image.
// - 'children' allows for flexible content to be passed inside the card body.

type CardProps = {
  variant?: 'default' | 'makeup-service' | 'customer-component' | 'skin-service';
  header?: React.ReactNode;
  title?: React.ReactNode;
  duration?: React.ReactNode;
  text?: React.ReactNode;
  imgSrc?: string;
  children?: React.ReactNode;
};

export const Card = ({
  variant = 'default',
  header,
  title,
  duration,
  text,
  imgSrc,
  buttonText,
  onButtonClick,
  children,
}: CardProps & {
  buttonText?: string;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  // Base classes for all card variants
  const baseClasses = "bg-white rounded-2xl transition-all duration-200";

  // Classes for the 'default' variant
  const defaultClasses = "max-w-sm overflow-hidden rounded-2xl";

  // Classes for the 'makeup-service' and 'customer-component' variants
  const specializedClasses = "w-[380px] h-[539px] flex flex-col overflow-hidden rounded-2xl";
  
  // Classes for the new 'skin-service' variant
  const skinServiceClasses = "w-[1236px] h-[452.5px] flex flex-row rounded-[16px] overflow-hidden";

  // Determine which set of classes to apply based on the 'variant' prop
  let variantClasses;
  switch (variant) {
    case 'makeup-service':
    case 'customer-component':
      variantClasses = specializedClasses;
      break;
    case 'skin-service':
      variantClasses = skinServiceClasses;
      break;
    default:
      variantClasses = defaultClasses;
  }
  
  // Conditionally add the drop shadow to the main container
  const shadowClass = variant === 'customer-component' ? 'drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]' : '';

  return (
    <div className={`${baseClasses} ${variantClasses} ${shadowClass}`}>
      {/* Conditionally render the image for the 'makeup-service' and 'customer-component' cards */}
      {(variant === 'makeup-service' || variant === 'customer-component') && (
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
      )}
      
      {/* Conditionally render the image for the 'skin-service' card */}
      {variant === 'skin-service' && (
        <img
          src={imgSrc || 'https://placehold.co/393x453/e2e8f0/64748b?text=Skin+Service+Image'}
          alt="Skin service"
          className="w-[393px] h-[453px] object-cover rounded-[16px]"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://placehold.co/393x453/e2e8f0/64748b?text=Image+Not+Found';
          }}
        />
      )}

      {/* Conditionally render the header for the 'default' card */}
      {variant === 'default' && header && (
        <div className="px-5 py-3 font-semibold">
          {header}
        </div>
      )}

      {/* The main card body content */}
      <div className={`p-5 flex-1 flex flex-col justify-start gap-4 ${
          variant === 'makeup-service'
            ? 'h-[109px] bg-[#F9F2EB]'
            : variant === 'customer-component'
            ? 'h-[109px]'
            : variant === 'skin-service'
            ? 'p-8 flex-1'
            : ''
        }`}
      >
        {(variant === 'makeup-service' || variant === 'customer-component') ? (
          <div className="flex justify-between items-center w-full">
            <h5 className="m-0 text-base font-normal uppercase text-black">{title}</h5>
            <span className="text-xs font-normal uppercase text-black">{duration}</span>
          </div>
        ) : (
          <h5 className="mt-0 mb-3 text-xl font-semibold text-gray-800">{title}</h5>
        )}
        
        {variant === 'default' && text && (
          <p className="mt-0 mb-4 text-gray-600 leading-normal">{text}</p>
        )}
        
        {variant === 'skin-service' && (
          <>
            <h5 className="m-0 text-3xl font-normal uppercase text-black">{title}</h5>
            <p className="text-sm font-normal text-gray-600">{text}</p>
            <span className="text-sm font-normal uppercase text-black">{duration}</span>
          </>
        )}

        {children}

        {/* Conditionally render the button for the 'makeup-service', 'customer-component' and 'skin-service' variants */}
        {(variant === 'makeup-service' || variant === 'customer-component' || variant === 'skin-service') && (
            <div className={`flex justify-between items-center w-full ${variant === 'skin-service' ? 'mt-auto' : ''}`}>
                <button
                  className={`${variant === 'skin-service' ? 'bg-[#F9F2EB] text-black px-6 py-3 rounded-lg font-bold' : 'text-[#757575] bg-transparent border-none p-0 cursor-pointer'}`}
                  type="button"
                  onClick={onButtonClick}
                >
                  {buttonText}
                </button>
            </div>
        )}
      </div>
    </div>
  );
};
