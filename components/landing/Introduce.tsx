import IntroduceBox from './IntroduceBox';
import Project from './Project';
import Section from './Section';
import Skills from './Skills';
import { format } from '@formkit/tempo';

export default function Introduce() {
  const WORKS = [{ name: '레드브릭', position: 'FrontEnd Engineer', period: ['2022-04-25', '2023-07-24'] }];

  const calcPeriod = (period: string[]) => {
    const [startDate, endDate] = period;
    const diff = new Date(endDate).getTime() - new Date(startDate).getTime();

    const diffInMs = Math.abs(diff);

    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    return `${years}년 ${months}개월`;
  };

  return (
    <div className='bg-white flex flex-col justify-center items-center px-12 py-12 pb-20 gap-12 max-w-6xl m-auto rounded-bl-[7rem] rounded-br-[7rem]	'>
      <IntroduceBox />
      <Section title='Work Experience'>
        <div className='flex flex-col gap-6'>
          {WORKS.map((work) => (
            <div key={work.name}>
              <p className='text-3xl font-semibold'>{work.name}</p>
              <p className='text-base font-light'>{work.position}</p>
              <p className='font-light text-sm'>{`${format(new Date(work.period[0]), 'YYYY.MM')} ~ ${format(
                new Date(work.period[1]),
                'YYYY.MM'
              )} (${calcPeriod(work.period)})`}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title='Projects'>
        <Project title='morak' description='hihi' githubUrl='' url='' stacks={['d', 'fd']} details={['ddd', 'ddfd']} />
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
