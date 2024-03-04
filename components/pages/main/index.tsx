'use client';
import { useRef, useState } from 'react';
import Landing from '@/components/landing/main';
import Footer from '@/components/landing/Footer';
import Introduce from '@/components/landing/Introduce';
import Header from '@/components/ui/Header';
import Light from '@/components/light';
import Cover from '@/components/cover';

export default function Main() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const onClickPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  };

  const [isFinishedIntro, setIsFinishedIntro] = useState(false);
  const [isShowBackground, setIsShowBackground] = useState(false);

  const handleBackground = (isShow: boolean) => setIsShowBackground(isShow);
  const handleIntro = (isFinished: boolean) => setIsFinishedIntro(isFinished);

  return (
    <>
      {!isFinishedIntro &&
        (isShowBackground ? <Cover handleIntro={handleIntro} /> : <Light handleBackground={handleBackground} />)}
      {isShowBackground && (
        <>
          <Header />
          <Landing onClickPortfolio={onClickPortfolio} />
          <Introduce portfolioRef={portfolioRef} />
          <Footer />
        </>
      )}
    </>
  );
}
