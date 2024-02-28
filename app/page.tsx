'use client';
import Landing from '@/components/landing/main';
import Footer from '@/components/landing/Footer';
import Introduce from '@/components/landing/Introduce';
import { useRef } from 'react';
import Header from '@/components/ui/Header';

export default function Home() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const onClickPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
  };

  return (
    <>
      <Header />
      <Landing onClickPortfolio={onClickPortfolio} />
      <Introduce portfolioRef={portfolioRef} />
      <Footer />
    </>
  );
}
