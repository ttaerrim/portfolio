import IntroduceBox from './IntroduceBox';
import Project from './Project';
import ProjectCard from './ProjectCard';
import Section from './Section';

export default function Introduce() {
  return (
    <div className='bg-white h-full flex flex-col justify-center items-center px-12 gap-12'>
      <IntroduceBox />
      <Section title='프로젝트'>
        <Project title='morak' description='hihi' githubUrl='' url='' stacks={['d', 'd']} details={['ddd', 'ddd']} />
      </Section>
      <Section title='프로젝트'>
        <ProjectCard
          title='morak'
          description='hihi'
          githubUrl=''
          url=''
          stacks={['d', 'd']}
          details={['ddd', 'ddd']}
        />
      </Section>
    </div>
  );
}
