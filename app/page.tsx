'use client';
import Landing from '@/components/landing/main';
import Footer from '@/components/landing/Footer';
import Introduce from '@/components/landing/Introduce';
import { useRef, useState } from 'react';
import Header from '@/components/ui/Header';
import Light from '@/components/light';
import Cover from '@/components/cover';

export default function Home() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const onClickPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  };

  const [isShowBackground, setIsShowBackground] = useState(false);

  const handleBackground = (isShow: boolean) => {
    setIsShowBackground(isShow);
  };

  return (
    <>
      {isShowBackground ? <Cover /> : <Light handleBackground={handleBackground} />}
      <Header />
      <Landing onClickPortfolio={onClickPortfolio} />
      <Introduce portfolioRef={portfolioRef} />
      <Footer />
    </>
  );
}
