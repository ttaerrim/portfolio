import { pointFont } from '@/app/font';
import Link from 'next/link';

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className='bg-transparent p-4'>
        <Link href='/'>
          <span className={`${pointFont.className} text-white text-2xl`}>TR</span>
        </Link>
      </header>
      <main className='flex justify-center items-center'>{children}</main>
    </>
  );
}
