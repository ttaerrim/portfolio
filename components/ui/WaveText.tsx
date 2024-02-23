'use client';
import { useState } from 'react';

type WaveTextProps = {
  children: string;
  className?: string;
};
export default function WaveText({ children, className = '' }: WaveTextProps) {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

  const updateText = (text: string) => {
    if (isAnimationPlaying) return;

    let delay = 0;
    const aniText = document.getElementById('animated');

    if (aniText) {
      aniText.innerHTML = text
        .split('')
        .map((letter: string) => {
          return `<span>` + letter + `</span>`;
        })
        .join('');

      Array.from(aniText.children).forEach((span, index) => {
        setTimeout(() => {
          span.className += 'animate-text-rainbow relative top-0 left-0';
        }, index * 60 + delay);
      });
    }
  };

  const waveText = () => {
    setIsAnimationPlaying(true);
    updateText(children);
  };

  return (
    <span id='animated' className={className} onMouseEnter={waveText} onMouseOut={() => setIsAnimationPlaying(false)}>
      {children}
    </span>
  );
}
