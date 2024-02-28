'use client';
import { useEffect, useRef } from 'react';

export default function String() {
  const contentRef = useRef<HTMLDivElement>(null);

  const pathRef = useRef<SVGPathElement>(null);
  useEffect(() => {
    const pathLength = pathRef.current?.getTotalLength();
    console.log(pathLength);
    const { current } = pathRef;
    if (current) {
      current.style.strokeDasharray = pathLength + '';
      current.style.strokeDashoffset = pathLength + '';
    }

    const calcDashOff = (scrollY: number, element: HTMLDivElement, length: number) => {
      const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
      const value = length - length * ratio;
      return value < 0 ? 0 : value > length ? length : value;
    };

    const scrollHandler = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.9;
      if (contentRef.current && pathLength) {
        current.style.strokeDashoffset = calcDashOff(scrollY, contentRef.current, pathLength) + '';
      }
    };

    document.addEventListener('scroll', scrollHandler);
  }, []);
  return (
    <div className='flex justify-center bg-black w-full h-screen text-white' ref={contentRef}>
      <svg width='201' height='200' viewBox='0 0 201 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0_13_47)'>
          <path
            ref={pathRef}
            d='M200.42 100.004C200.42 87.5557 193.041 76.0667 180.567 66.8025C182.834 51.4414 179.93 38.0928 171.124 29.2871C162.318 20.4815 148.978 17.5774 133.609 19.8446C124.361 7.3791 112.872 0 100.424 0C87.9754 0 76.4864 7.3791 67.2222 19.8531C51.8611 17.5859 38.5125 20.49 29.7068 29.2956C20.9011 38.1013 17.9971 51.4414 20.2643 66.811C7.79878 76.0583 0.419678 87.5557 0.419678 100.004C0.419678 112.453 7.79878 123.942 20.2728 133.206C18.0055 148.567 20.9096 161.916 29.7153 170.721C38.521 179.527 51.8611 182.431 67.2307 180.164C76.4864 192.629 87.9839 200.017 100.432 200.017C112.881 200.017 124.37 192.638 133.634 180.164C148.995 182.431 162.344 179.527 171.15 170.721C179.955 161.916 182.859 148.576 180.592 133.206C193.058 123.95 200.445 112.453 200.445 100.004H200.42Z'
            fill='none'
            stroke='white'
          />
        </g>
        <defs>
          <clipPath id='clip0_13_47'>
            <rect width='200' height='200' fill='white' transform='translate(0.419678)' />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
