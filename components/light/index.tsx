'use client';
import { useEffect, useRef, useState } from 'react';
import { hack } from '@/app/font';
import String from './String';
import IC_ARROW from '@/assets/double-arrow.svg';

type LightProps = {
  handleBackground: (isShow: boolean) => void;
};

export default function Light({ handleBackground }: LightProps) {
  const screenRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [isStringPulled, setIsStringPulled] = useState(false);

  const handleStringPulled = (isPulled: boolean) => {
    setIsStringPulled(isPulled);
    handleBackground(isPulled);
  };

  useEffect(() => {
    const calcOpacity = () => {
      const totalHeight = screenRef.current?.clientHeight;
      if (totalHeight) {
        const value = ((totalHeight / 5 - window.scrollY) / (totalHeight / 5)) * 2;
        return value < 0 ? 0 : value;
      }
      return 0;
    };
    const scrollHandler = () => {
      if (scrollRef.current) {
        scrollRef.current.style.opacity = `${calcOpacity()}`;
      }
    };
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div className='h-[500vh] relative' ref={screenRef}>
      <div ref={pinRef} />
      <div className='bg-black w-full h-[300vh] text-white'>
        <div
          className='flex h-full justify-center items-center flex-col fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4'
          ref={scrollRef}
        >
          <p className={`text-[3vw] ${hack.className}`}>Scroll Down!</p>
          <IC_ARROW viewBox='0 0 24 24' className='fill-white w-[10vw] h-[10vw] rotate-180' />
        </div>
      </div>
      {!isStringPulled && <String handleStringPulled={handleStringPulled} />}
    </div>
  );
}
