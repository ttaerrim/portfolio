'use client';
import { useEffect, useRef, useState } from 'react';
import IC_STRING from '@/assets/light-string.svg';

type StringProps = {
  handleStringPulled: (isPulled: boolean) => void;
};

const STRING_TOP_POSITION = 20;
export default function String({ handleStringPulled }: StringProps) {
  const coverRef = useRef<HTMLDivElement>(null);
  const stringRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const stringSvgRef = useRef<any>(null);
  const [isOnlyStringPulled, setIsOnlyStringPulled] = useState(false);

  useEffect(() => {
    const calcTop = () => {
      const screenHeight = screenRef.current?.clientHeight;
      if (screenHeight) {
        const value = (window.scrollY - screenHeight) / 5;
        return value > 0 ? value + STRING_TOP_POSITION : 0;
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
          coverRef.current.style.top = `${STRING_TOP_POSITION}%`;
        }
      }
    };

    const showString = () => {
      if (stringSvgRef.current && window.scrollY > 0) {
        stringSvgRef.current.style.visibility = 'visible';
      }
    };

    scrollTo(0, 0);

    document.addEventListener('scroll', scrollHandler);
    document.addEventListener('scroll', showString);
  }, []);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const onMouseDownString = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const calcPosition = (mouseYPosition: number, prevMouseYPosition: number) => {
    const value = (mouseYPosition - prevMouseYPosition) / 3;
    return value > 10 ? 10 : value;
  };
  const clickString = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDown && e.clientY > mousePosition.y && stringSvgRef.current) {
      const string = stringSvgRef.current;
      const diff = calcPosition(e.clientY, mousePosition.y);
      string.style.top = `${STRING_TOP_POSITION + diff}%`;

      if (diff > 9) {
        setIsOnlyStringPulled(true);
      }
    }
  };

  useEffect(() => {
    if (!isMouseDown && stringSvgRef.current) {
      const string = stringSvgRef.current;
      string.style.top = `${STRING_TOP_POSITION}%`;
    }
  }, [isMouseDown, stringSvgRef]);

  useEffect(() => {
    setTimeout(() => {
      handleStringPulled(isOnlyStringPulled && !isMouseDown);
    }, 300);
  }, [isOnlyStringPulled, isMouseDown, handleStringPulled]);

  return (
    <div className='flex justify-center bg-black w-full h-screen text-white' ref={screenRef}>
      <div
        className='w-screen h-4/5 fixed top-[30%] left-1/2 -translate-x-2/4 -translate-y-2/4 z-10 bg-black hidden'
        ref={coverRef}
      />
      <div
        ref={stringRef}
        className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50vw] h-[100vh]'
        onMouseMove={clickString}
        onMouseDown={onMouseDownString}
        onMouseUp={() => setIsMouseDown(false)}
      >
        <IC_STRING
          className={`invisible [&>path]:fill-white fixed top-[${STRING_TOP_POSITION}%] left-1/2 -translate-x-2/4 -translate-y-2/4 transition-all`}
          id='string'
          ref={stringSvgRef}
        />
      </div>
    </div>
  );
}
