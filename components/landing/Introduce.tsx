import IntroduceBox from './IntroduceBox';
import Project from './Project';
import Section from './Section';
import Skills from './Skills';
import { format } from '@formkit/tempo';

export default function Introduce() {
  const WORKS = [{ name: '레드브릭', position: 'FrontEnd Engineer', period: ['2022-04-25', '2023-07-24'] }];

  const EDUCATION = [
    {
      name: '네이버 부스트캠프 웹·모바일 8기',
      period: ['2023-07-01', '2023-12-01'],
      description: '자기 주도적으로 행동하고 열린 사고로 동료와 협력하는 지속 가능한 개발자로 성장',
    },
    {
      name: '원티드 프리온보딩 프론트엔드 코스',
      period: ['2022-01-20', '2022-03-10'],
      description:
        '원티드 X 위코드 X 임팩트캠퍼스 주관 프론트엔드 코스로, 참가 기업들의 실제 프로젝트를 경험하며 일정 수준 이상의 기술 역량을 갖추어 취업 시장에서 필요한 경쟁력 있는 프론트엔드 개발자로 성장함',
    },
    {
      name: '멋쟁이사자처럼',
      period: ['2019-03-02', '2020-10-01'],
      description: `덕성여대 멋쟁이사자처럼 회원 활동을 통해 다양한 개발 기술을 습득하고 웹 페이지 개발에 참여함\n운영진으로 활동하며 코딩 교육 세션을 진행하고, 지속적인 학습과 협업을 통해 커뮤니케이션 능력 향상`,
    },
    {
      name: '덕성여자대학교',
      period: ['2017-03-02', '2022-02-02'],
      description: 'IT미디어공학과 졸업 (평점 3.83/4.5)',
    },
  ];

  const printPeriod = (period: string[], showYM = true) => {
    const [start, end] = period;

    return `${format(new Date(start), 'YYYY.MM')} ~ ${end ? format(new Date(end), 'YYYY.MM') : 'now'} ${
      showYM ? `(${calcPeriod(period)})` : ''
    }`;
  };

  const calcPeriod = (period: string[]) => {
    const [start, end] = period;

    const diff = (end ? new Date(end) : new Date()).getTime() - new Date(start).getTime();

    const diffInMs = Math.abs(diff);

    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    return `${years > 0 ? `${years}년` : ''} ${months}개월`;
  };

  const PROJECTS = [
    {
      title: '모락',
      url: 'https://github.com/boostcampwm2023/web17_morak',
      stacks: ['React', 'TypeScript', 'React Query', 'Vite', 'Vanilla Extract', 'React Hook Form', 'TurboRepo'],
      period: ['2023-11-01'],
      description: '네이버 부스트캠프 내 모임 모집/관리 플랫폼',
      detail: [
        'TMap SDK를 활용한 지도 페이지 구현 (TMap 지도 성능 분석기, 장소 선택 기능 개발기)',
        '모노레포를 사용한 공통 인터페이스, 공통 컴포넌트 등 공통 패키지 관리',
        '리팩토링 전후 동일 결과를 보장하기 위해 cypress 사용한 e2e 테스트 코드 작성',
        'FE/BE 개발을 병렬적으로 진행해 개발 생산성을 향상시키기 위한 MSW 사용',
        '예기치 않은 UI 변경을 예방하기 위한 시각적 회귀 테스트 도입',
        '프로젝트 팀장으로써 프로젝트 기획, 디자인 총괄 및 일정 관리',
        '개발 일지 작성 문화 도입으로 팀 내 6주간 약 70개의 개발 일지 작성',
      ],
    },
    {
      title: 'For Minutes',
      url: '',
      stacks: ['React', 'JavaScript', 'HTML/CSS', 'Django', 'Naver Cloud Platform'],
      detail: [
        '프로젝트 팀장: 프로젝트 개발 계획 수립과 주기적인 미팅 주도',
        'FrontEnd: 회의록 정보 작성, 회의 스크립트·요약·키워드 기능, 라이브러리를 사용한 pdf 변환 기능 개발',
        'BackEnd: STT(Speech-to-Text) API와 요약 API 연동',
      ],
      period: ['2021-03-01', '2021-10-01'],
      description: '인공지능 회의록 요약 서비스',
    },
  ];

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
        <div className='flex flex-col gap-8'>
          {PROJECTS.map((item) => (
            <Project
              key={item.title}
              title={item.title}
              url={item.url}
              description={item.description}
              stacks={item.stacks}
              details={item.detail}
              period={printPeriod(item.period, false)}
            />
          ))}
        </div>
      </Section>
      <Section title='Skills'>
        <Skills />
      </Section>
      <Section title='Education'>
        <div className='flex flex-col gap-6'>
          {EDUCATION.map((item) => (
            <div key={item.name}>
              <span className='text-xl font-semibold'>{item.name}</span>
              <time className='ml-1 font-light text-sm'>{printPeriod(item.period, false)}</time>
              <p className='text-sm font-light break-keep text-slate-600 w-4/5 whitespace-break-spaces'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
