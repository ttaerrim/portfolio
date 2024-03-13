import Link from 'next/link';
import { PROJECTS } from '../landing/Introduce';

export default function Projects() {
  const convertKebabNaming = (name: string) => {
    return name.toLowerCase().split(' ').join('-');
  };
  return (
    <div>
      {PROJECTS.map((project) => (
        <Link href={`/project/${convertKebabNaming(project.title)}`} key={project.title}>
          {project.title}
        </Link>
      ))}
    </div>
  );
}
