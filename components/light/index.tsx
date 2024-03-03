'use client';
import { useEffect, useRef, useState } from 'react';
import { hack } from '@/app/font';
import String from './String';

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

  useEffect(() => {
    if (isStringPulled && scrollRef.current) {
      scrollTo(0, 0);
      document.body.style.overflow = 'auto';
      scrollRef.current.style.display = 'none';
    }
  }, [isStringPulled]);

  return (
    <div className='h-[500vh] relative' ref={screenRef}>
      <div ref={pinRef} />
      <div className='bg-black w-full h-[200vh] text-white'>
        <div
          className='flex h-full justify-center items-center flex-col fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4'
          ref={scrollRef}
        >
          <p className={`text-[3vw] ${hack.className}`}>Scroll Down!</p>
          <svg
            className='fill-white w-[10vw] h-[10vw] rotate-180'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='m7.293 15.293 1.414 1.414L12 13.414l3.293 3.293 1.414-1.414L12 10.586l-4.707 4.707z' />
            <path d='m7.293 11.293 1.414 1.414L12 9.414l3.293 3.293 1.414-1.414L12 6.586l-4.707 4.707z' />
          </svg>
        </div>
      </div>
      {!isStringPulled && <String handleStringPulled={handleStringPulled} />}
    </div>
  );
}
