type SectionProps = {
  title: string;
  children?: React.ReactNode;
};
export default function Section({ title, children }: SectionProps) {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 divide-y divide-main-blue'>
        <h2 className='text-start my-4 text-lg text-main-blue font-bold'>{title}</h2>
        <div className=''>{children}</div>
      </div>
    </div>
  );
}
