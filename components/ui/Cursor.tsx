'use client';
import { isMobile } from '@/utils/isMobile';
import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const setCursor = (e: Event) => {
    const { clientX, clientY } = e as MouseEvent;

    if (cursorRef.current) {
      cursorRef.current.style.left = clientX + 'px';
      cursorRef.current.style.top = clientY + 'px';
    }
  };

  const handleLinkCursor = () => {
    ['a', 'button'].forEach((link) => {
      document.querySelectorAll(link).forEach((el) => {
        el.addEventListener('mouseover', () => setHovered(true));
        el.addEventListener('mouseout', () => setHovered(false));
      });
    });
  };

  const handleMouseDown = () => {
    setClicked(true);
  };

  const handleMouseUp = () => {
    setClicked(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', setCursor);
    document.addEventListener('mousemove', setCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    handleLinkCursor();

    return () => {
      document.removeEventListener('scroll', setCursor);
      document.removeEventListener('mousemove', setCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    !isMobile && (
      <div
        ref={cursorRef}
        className={`${
          hovered ? 'w-7 h-7 opacity-100 animate-cursor-blink' : ''
        } w-5 h-5 fixed rounded-full mix-blend-difference bg-white opacity-70 cursor-none transition-cursor ${
          clicked ? '!mix-blend-color-dodge	' : ''
        }`}
      ></div>
    )
  );
}
