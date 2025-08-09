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
  const cardClasses = "bg-white rounded-[16px] overflow-hidden drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-all duration-200 w-[1236px] h-[452.5px] flex flex-row";
  const imageClasses = "w-[393px] h-[453px] object-cover rounded-[16px] drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]";
  const contentClasses = "p-8 flex-1 flex flex-col justify-start gap-4";
  const buttonClasses = "bg-[#F9F2EB] text-black px-6 py-3 rounded-lg font-bold transition-colors duration-200 hover:bg-[#F0E6DD]";

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
        <h5 className="m-0 text-3xl font-normal uppercase text-black">{title}</h5>
        <p className="text-sm font-normal text-gray-600">{text}</p>
        <span className="text-sm font-normal uppercase text-black">{duration}</span>
        
        <div className="mt-auto">
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