import React from 'react';

interface IconSlotProps {
  slotId: 'ICON_CLOUD' | 'ICON_TOOLKITS' | 'ICON_DAPPS';
  accentColor: string; // e.g. '#F5B400' (amber), '#3B9BE8' (sky), '#7C5CE6' (violet)
  altText: string;
}

export const IconSlot: React.FC<IconSlotProps> = ({
  slotId,
  accentColor,
  altText,
}) => {
  return (
    <div className="flex items-center justify-center p-2">
      <div
        id={slotId.toLowerCase()}
        role="img"
        aria-label={altText}
        className="relative flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
        style={{
          width: '160px',
          height: '160px',
          backgroundColor: '#FAF7F4',
          boxShadow: `0 0 0 12px ${accentColor}`,
        }}
      >
        <div
          className="flex h-full w-full items-center justify-center rounded-full text-center select-none"
          style={{
            backgroundColor: accentColor,
          }}
        >
          <span className="text-white font-bold text-sm tracking-wide px-2">
            [{slotId}]
          </span>
        </div>
      </div>
    </div>
  );
};
