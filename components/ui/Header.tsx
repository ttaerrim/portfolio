'use client';
import { pointFont } from '@/app/font';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [count, setCount] = useState(0);

  const text = 'welcome to ttaerrim world'.toUpperCase();
  const textRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);

  const animate = (time: DOMHighResTimeStamp) => {
    const width = textRef.current?.scrollWidth;
    if (previousTimeRef.current != undefined && width) {
      const deltaTime = Math.floor(time - previousTimeRef.current);

      setCount((prevCount) => (prevCount + deltaTime * 0.2) % width);
    }

    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div
      className={`justify-center item-center w-full bg-main-blue text-center ${pointFont.className} text-[8vw] fixed text-white flex-nowrap overflow-hidden z-20`}
    >
      <div className={`flex flex-nowrap`} style={{ transform: `translateX(-${count}px)` }}>
        <p className='text-nowrap pr-6' ref={textRef}>
          {text}
        </p>
        <p className='text-nowrap pr-6'>{text}</p>
      </div>
    </div>
  );
}
