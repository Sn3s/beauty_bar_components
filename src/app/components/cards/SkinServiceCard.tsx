import React from 'react';

type SkinServiceCardProps = {
  imgSrc?: string;
  title?: React.ReactNode;
  text?: React.ReactNode;
  duration?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const SkinServiceCard = ({
  imgSrc,
  title,
  text,
  duration,
  buttonText,
  onButtonClick,
}: SkinServiceCardProps) => {

  // --- Typography Configuration ---
  const titleTypography = {
    fontFamily: "font-['Owners_XWide']",
    weight: 'font-bold',
    style: 'italic',
    size: 'text-5xl',
    lineHeight: 'leading-normal',
    letterSpacing: 'tracking-normal',
    horizontalAlign: 'text-left',
    case: 'uppercase',
    color: 'text-black'
  };

  const textTypography = {
    fontFamily: "font-['Owners_XWide']",
    weight: 'font-normal',
    style: 'not-italic',
    size: 'text-2xl',
    lineHeight: 'leading-normal',
    letterSpacing: 'tracking-normal',
    horizontalAlign: 'text-left',
    case: 'normal',
    color: 'text-black'
  };

  const durationTypography = {
    fontFamily: "font-['Owners_XWide']",
    weight: 'font-normal',
    style: 'not-italic',
    size: 'text-base',
    lineHeight: 'leading-normal',
    letterSpacing: 'tracking-normal',
    horizontalAlign: 'text-left',
    case: 'uppercase',
    color: 'text-[#757575]'
  };

  const buttonTypography = {
    fontFamily: "font-['Owners_XWide']",
    weight: 'font-normal',
    style: 'not-italic',
    size: 'text-base',
    lineHeight: 'leading-normal',
    letterSpacing: 'tracking-normal',
    case: 'uppercase',
    color: 'text-black'
  };

  // --- Building Class Strings from Typography Objects ---
  const titleClasses = Object.values(titleTypography).join(' ');
  const textClasses = Object.values(textTypography).join(' ');
  const durationClasses = Object.values(durationTypography).join(' ');
  const buttonTextClasses = Object.values(buttonTypography).join(' ');

  const cardClasses = "bg-white rounded-[16px] overflow-hidden transition-all duration-200 w-[1236px] h-[452.5px] flex flex-row";
  const imageClasses = "w-[393px] h-[453px] object-cover rounded-[16px]";
  const contentClasses = "bg-white p-8 flex-1 flex flex-col justify-start gap-4";
  const buttonStyleClasses = "bg-[#F9F2EB] px-6 py-3 rounded-lg transition-colors duration-200 hover:bg-[#F0E6DD]";

  return (
    <div className={cardClasses}>
      <img
        src={imgSrc}
        alt="Skin service"
        className={imageClasses}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://placehold.co/393x453/e2e8f0/64748b?text=Image+Not+Found';
        }}
      />

      <div className={contentClasses}>
        <h5 className={titleClasses}>{title}</h5>
        <div className="w-[600px]">
          <p className={textClasses}>{text}</p>
          <span className={durationClasses}>{duration}</span>
        </div>
        
        <div className="mt-auto">
          <button
            className={`${buttonStyleClasses} ${buttonTextClasses}`}
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
