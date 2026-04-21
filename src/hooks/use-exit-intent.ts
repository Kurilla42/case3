"use client";

import { useEffect, useState } from 'react';

export function useExitIntent() {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 || e.relatedTarget === null || (e.target as HTMLElement).nodeName === 'HTML') {
        setIsExiting(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseOut);
    return () => {
      document.removeEventListener('mouseleave', handleMouseOut);
    };
  }, []);

  return { isExiting, reset: () => setIsExiting(false) };
}
