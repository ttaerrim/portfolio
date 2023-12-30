type SectionProps = {
  title: string;
  children: React.ReactElement;
};
export default function Section({ title, children }: SectionProps) {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 divide-y divide-main-blue'>
        <h3 className='text-start my-4 text-lg text-main-blue font-bold'>{title}</h3>
        <div className=''>{children}</div>
      </div>
    </div>
  );
}
