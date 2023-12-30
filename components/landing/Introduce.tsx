import IntroduceBox from './IntroduceBox';
import Section from './Section';

export default function Introduce() {
  return (
    <div className='bg-white h-full flex flex-col justify-center items-center px-12 gap-12'>
      <IntroduceBox />
      <Section title='프로젝트'>
        <div></div>
      </Section>
    </div>
  );
}
