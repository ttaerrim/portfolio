'use client';
import { useEffect, useRef, useState } from 'react';
import IC_STRING from '@/assets/light-string.svg';

export default function String() {
  const coverRef = useRef<HTMLDivElement>(null);
  const stringRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const stringSvgRef = document.querySelector('#string');

  useEffect(() => {
    const calcTop = () => {
      const screenHeight = screenRef.current?.clientHeight;
      if (screenHeight) {
        const value = (window.scrollY - screenHeight) / 5;
        return value > 0 ? value + 20 : 0;
      }
      return 0;
    };

    const scrollHandler = () => {
      if (coverRef.current && screenRef.current && stringRef.current) {
        if (screenRef.current.clientHeight > window.scrollY) {
          coverRef.current.style.display = 'none';
          stringRef.current.style.display = 'none';

          return;
        }
        stringRef.current.style.display = 'block';

        const per = calcTop();
        if (per > 0 && per < 100) {
          coverRef.current.style.display = 'block';
          coverRef.current.style.top = `${per}%`;
        } else if (per > 100) {
          coverRef.current.style.display = 'none';
          document.body.style.overflow = 'hidden';
        } else {
          coverRef.current.style.display = 'block';
          coverRef.current.style.top = `20%`;
        }
      }
    };

    scrollTo(0, 0);

    document.addEventListener('scroll', scrollHandler);
  }, []);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const onMouseDownString = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const calcPosition = (mouseYPosition: number, prevMouseYPosition: number) => {
    const value = (mouseYPosition - prevMouseYPosition) / 5;
    return value > 10 ? 10 : value;
  };
  const clickString = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDown && e.clientY > mousePosition.y && stringSvgRef) {
      const string = stringSvgRef as HTMLElement;
      const diff = calcPosition(e.clientY, mousePosition.y);
      string.style.top = `${20 + diff}%`;
    }
  };

  useEffect(() => {
    if (!isMouseDown && stringSvgRef) {
      const string = stringSvgRef as HTMLElement;
      string.style.top = '20%';
    }
  }, [isMouseDown, stringSvgRef]);

  return (
    <div className='flex justify-center bg-black w-full h-screen text-white' ref={screenRef}>
      <div
        className='w-screen h-2/3 fixed top-[20%] left-1/2 -translate-x-2/4 -translate-y-2/4 z-10 bg-black hidden'
        ref={coverRef}
      />
      <div
        ref={stringRef}
        className='relative top-[-50%] w-[50vw] h-[100vh]'
        onMouseMove={clickString}
        onMouseDown={onMouseDownString}
        onMouseUp={() => setIsMouseDown(false)}
      >
        <IC_STRING
          className='[&>path]:fill-white fixed top-[20%] left-1/2 -translate-x-2/4 -translate-y-2/4'
          id='string'
        />
      </div>
    </div>
  );
}
