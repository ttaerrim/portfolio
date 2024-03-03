'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

type CoverProps = {
  handleIntro: (isFinished: boolean) => void;
};

export default function Cover({ handleIntro }: CoverProps) {
  const [isEventRunning, setIsEventRunning] = useState(false);
  const focusEl = useRef<HTMLDivElement>(null);
  const bodyEl = document.querySelector('body') as HTMLBodyElement;

  const getScreenAvg = useCallback(
    () => Math.floor((bodyEl.clientWidth + bodyEl.clientHeight) * 0.5),
    [bodyEl.clientHeight, bodyEl.clientWidth]
  );

  const onClickScreen = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isEventRunning) return;

    let j = 0;
    setIsEventRunning(true);
    document.removeEventListener('mousemove', trackMouse);
    const eventX = event.clientX + 'px';
    const eventY = event.clientY + 'px';

    setInterval(() => {
      j += 1;
      if (focusEl.current) {
        focusEl.current.style.background = `radial-gradient(
        circle ${getScreenAvg() * (0.1 + 0.02 * j)}px at ${eventX} ${eventY},
        rgba(0, 0, 0, 0.01) 0%,
        rgba(0, 0, 0, 0.5) 70%,
        rgba(0, 0, 0, 1) 100%`;
      }
    }, 10);

    setTimeout(() => {
      setIsEventRunning(false);
      handleIntro(true);
      document.body.style.overflow = 'auto';
    }, 700);
  };

  const trackMouse = useCallback(
    (event: MouseEvent) => {
      if (isEventRunning) return;
      const focusElX = event.clientX + 'px';
      const focusElY = event.clientY + 'px';
      if (focusEl.current) {
        focusEl.current.style.background = `radial-gradient(
            circle ${getScreenAvg() * 0.1}px at ${focusElX} ${focusElY},
            rgba(0, 0, 0, 0.01) 0%,
            rgba(0, 0, 0, 0.5) 70%,
            rgba(0, 0, 0, 1) 100%`;
      }
    },
    [getScreenAvg, isEventRunning]
  );

  useEffect(() => {
    const cursor = document.querySelector('#cursor') as HTMLDivElement;
    if (cursor) {
      cursor.classList.add(
        'before:content-["click!"]',
        'before:absolute',
        'before:bottom-[-120%]',
        'before:text-white',
        'before:left-[-30%]'
      );
    }
  }, []);

  useEffect(() => {
    scrollTo(0, 0);
    document.addEventListener('mousemove', trackMouse);
  }, [trackMouse]);

  return <div ref={focusEl} onClick={onClickScreen} className='h-screen w-screen bg-black fixed z-30'></div>;
}
