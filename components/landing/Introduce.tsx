import IntroduceBox from './IntroduceBox';
import Project from './Project';
import Section from './Section';
import Skills from './Skills';

export default function Introduce() {
  return (
    <div className='bg-white flex flex-col justify-center items-center px-12 py-12 gap-12 max-w-6xl m-auto '>
      <IntroduceBox />
      <Section title='Projects'>
        <Project title='morak' description='hihi' githubUrl='' url='' stacks={['d', 'fd']} details={['ddd', 'ddfd']} />
      </Section>
      <Section title='Skills'>
        <Skills />
      </Section>
    </div>
  );
}
