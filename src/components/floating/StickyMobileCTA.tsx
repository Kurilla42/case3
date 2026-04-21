import React from 'react';

export const StickyMobileCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-primary p-4 z-50 flex gap-4 border-t-2 border-white/20">
      <button className="flex-1 bg-white text-primary font-bold py-3 rounded-md">CALL NOW</button>
      <button className="flex-1 bg-dark text-white font-bold py-3 rounded-md">SCHEDULE</button>
    </div>
  );
};
