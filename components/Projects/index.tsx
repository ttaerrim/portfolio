import Link from 'next/link';
import { PROJECTS } from '../landing/Introduce';
import { printPeriod } from '@/utils/period';

const REDBRICK_PROJECTS = [
  { title: 'Redbrick 3.0', description: '레드브릭 3.0으로 어쩌구저쩌구', period: ['2023-03-01', '2023-07-01'] },
  { title: 'Redbrick Admin', description: '레드브릭 관리자 도구 개발 어쩌구', period: ['2022-12-01', '2023-07-01'] },
  { title: 'Redbrick 2.0', description: '레드브릭 2.0으로 어쩌구 저쩌구', period: ['2022-08-01', '2023-07-01'] },
  {
    title: 'Redbrick Creator Challenge',
    description: '크리에이터 챌린지 페이지 개발 및 유지보수',
    period: ['2022-04-01', '2022-07-01'],
  },
];
export default function Projects() {
  const convertKebabNaming = (name: string) => {
    return name.toLowerCase().split(' ').join('-');
  };
  return (
    <div>
      <p className='text-5xl mb-7'>Projects</p>
      <div className='flex gap-2 overflow-auto'>
        {REDBRICK_PROJECTS.map((project) => (
          <Link href={`/project/${convertKebabNaming(project.title)}`} key={project.title}>
            <div key={project.title} className='flex flex-col justify-center border p-4 w-[20rem]'>
              <span className='text-lg font-semibold'>{project.title}</span>
              <span>{printPeriod(project.period, false)}</span>
              <span className='text-sm mt-1'>{project.description}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex gap-2 justify-end '>
        {PROJECTS.map((project) => (
          <Link href={`/project/${convertKebabNaming(project.title)}`} key={project.title}>
            <div className='flex flex-col justify-center border p-4 w-[20rem] text-end'>
              <span className='text-lg font-semibold'>{project.title}</span>
              <span>{printPeriod(project.period, false)}</span>
              <span className='text-sm mt-1'>{project.description}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
