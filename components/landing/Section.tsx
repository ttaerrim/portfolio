type SectionProps = {
  title: string;
  children?: React.ReactNode;
};
export default function Section({ title, children }: SectionProps) {
  return (
    <div className='w-full'>
      <h2 className='text-start my-4 text-4xl text-main-blue font-bold'>{title}</h2>
      <div className=''>{children}</div>
    </div>
  );
}
