'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const setCursor = (e: Event) => {
    const { pageX, pageY } = e as MouseEvent;

    if (cursorRef.current) {
      cursorRef.current.style.left = pageX + 'px';
      cursorRef.current.style.top = pageY + 'px';
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', setCursor);
    document.addEventListener('mousemove', setCursor);

    return () => {
      removeEventListener('scroll', setCursor);
      removeEventListener('mousemove', setCursor);
    };
  });

  return <div ref={cursorRef} className='fixed w-5 h-5 rounded-full mix-blend-difference bg-white opacity-70'></div>;
}
