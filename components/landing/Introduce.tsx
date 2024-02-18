import IntroduceBox from './IntroduceBox';
import Project from './Project';
import Section from './Section';
import Skills from './Skills';
import { format } from '@formkit/tempo';

export default function Introduce() {
  const WORKS = [{ name: '레드브릭', position: 'FrontEnd Engineer', period: ['2022-04-25', '2023-07-24'] }];

  const printPeriod = (period: string[]) => {
    const [start, end] = period;

    return `${format(new Date(start), 'YYYY.MM')} ~ ${end ? format(new Date(end), 'YYYY.MM') : 'now'} (${calcPeriod(
      period
    )})`;
  };

  const calcPeriod = (period: string[]) => {
    const [start, end] = period;

    const diff = (end ? new Date(end) : new Date()).getTime() - new Date(start).getTime();

    const diffInMs = Math.abs(diff);

    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    return `${years}년 ${months}개월`;
  };

  return (
    <div className='bg-white flex flex-col justify-center items-center px-12 py-12 pb-20 gap-12 max-w-6xl m-auto rounded-bl-[7rem] rounded-br-[7rem]	'>
      <IntroduceBox />
      <Section title='Career'>
        <div className='flex flex-col gap-6'>
          {WORKS.map((work) => (
            <div key={work.name}>
              <p className='text-3xl font-semibold'>{work.name}</p>
              <p className='text-base font-light'>{work.position}</p>
              <time className='font-light text-sm'>{printPeriod(work.period)}</time>
            </div>
          ))}
        </div>
      </Section>
      <Section title='Projects'>
        <Project
          title='morak'
          url='https://github.com/boostcampwm2023/web17_morak'
          description='네이버 부스트캠프 내 모임 모집/관리 플랫폼'
          stacks={['React', 'TypeScript', 'React Query']}
          details={[
            'TMap SDK를 활용한 지도 페이지 구현 (TMap 지도 성능 분석기, 장소 선택 기능 개발기)',
            '모노레포를 사용한 공통 인터페이스, 공통 컴포넌트 등 공통 패키지 관리',
            '리팩토링 전후 동일 결과를 보장하기 위해 cypress 사용한 e2e 테스트 코드 작성',
            'FE/BE 개발을 병렬적으로 진행해 개발 생산성을 향상시키기 위한 MSW 사용',
            '예기치 않은 UI 변경을 예방하기 위한 시각적 회귀 테스트 도입',
            '프로젝트 팀장으로써 프로젝트 기획, 디자인 총괄 및 일정 관리',
            '개발 일지 작성 문화 도입으로 팀 내 6주간 약 70개의 개발 일지 작성',
          ]}
        />
      </Section>
      <Section title='Skills'>
        <Skills />
      </Section>
      <Section title='Education'>
        <div className='mt-6'>
          <p>네이버 부스트캠프 웹 모바일 8기</p>
          <p>원티드 프리온보딩 프론트엔드 코스</p>
          <p>덕성여자대학교 IT미디어공학과</p>
        </div>
      </Section>
      <Section title='Certificate'>
        <div className='mt-6'>
          <p>정보처리기사</p>
        </div>
      </Section>
    </div>
  );
}
