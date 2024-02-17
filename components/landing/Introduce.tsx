import IntroduceBox from './IntroduceBox';
import Project from './Project';
import Section from './Section';
import Skills from './Skills';

export default function Introduce() {
  return (
    <div className='bg-sub-yellow flex flex-col justify-center items-center px-12 py-12 pb-20 gap-12 max-w-6xl m-auto rounded-bl-[7rem] rounded-br-[7rem]	'>
      <IntroduceBox />
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
