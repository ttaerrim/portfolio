type SectionProps = {
  title: string;
  description: string;
  githubUrl: string;
  url: string;
  stacks: string[];
  details: string[];
};

export default function Project({ title, description, githubUrl, url, stacks, details }: SectionProps) {
  return (
    <article>
      <div className='flex mt-6 items-center'>
        <h3 className='text-base text-main-blue font-semibold px-1 bg-sub-blue rounded'>{title}</h3>
        <time className='ml-2 text-sm text-slate-400'>2022.03 ~ 2022.04</time>
      </div>
      <section className='bg-sub-blue rounded p-4 gap-4 mt-4'>
        <div>
          <p className='font-semibold'>{description}</p>
          <p>
            <span className='font-semibold'>github url </span>|{githubUrl}
          </p>
          <p>
            <span className='font-semibold'>배포 링크 </span>|{url}
          </p>
          <p>
            <span className='font-semibold'>사용 기술 </span>|{stacks.join(', ')}
          </p>
        </div>
        <ul className='list-disc mt-3 ml-5 text-sm'>
          {details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className='mt-4 text-sm text-slate-400 ml-auto text-end underline cursor-pointer'>자세히 보기</p>
      </section>
    </article>
  );
}
