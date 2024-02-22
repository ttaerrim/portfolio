import Link from 'next/link';

type SectionProps = {
  title: string;
  description: string;
  url: string;
  stacks: string[];
  details: string[];
  period: string;
};

export default function Project({ title, description, url, stacks, details, period }: SectionProps) {
  return (
    <article className='flex flex-col gap-1'>
      <h3 className='text-3xl font-semibold'>
        <Link href={url} className='underline'>
          {title}
        </Link>
      </h3>
      <div className='text-sm font-light flex gap-1'>
        <time>{period}</time>
        {'|'}
        <span>사이드 프로젝트</span>
      </div>
      <p className='font-semibold'>{description}</p>
      <div className='flex gap-1 text-sm'>
        {stacks.map((stack) => (
          <span key={stack} className='text-main-blue bg-sub-blue rounded px-1 text-xs'>
            {stack}
          </span>
        ))}
      </div>

      <ul className='list-disc mt-3 ml-5 text-sm'>
        {details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className='mt-4 text-sm text-slate-400 underline'>자세히 보기</p>
    </article>
  );
}
