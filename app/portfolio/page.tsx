import Footer from '@/components/landing/Footer';
import Introduce from '@/components/landing/Introduce';

export default function Portfolio() {
  const portfolios = [
    {
      title: '모락',
      startDate: '2023-11-01',
      endDate: '2023-12-20',
      description: '네이버 부스트캠프 내 모각코 모집/관리 플랫폼',
    },
    {
      title: 'For Minutes',
      startDate: '2021-03-01',
      endDate: '2021-10-01',
      description: '인공지능 회의록 요약 서비스',
    },
  ];

  return (
    <>
      <Introduce />
      <Footer />
    </>
  );
}
