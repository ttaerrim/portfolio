import Image from 'next/image';
import profilePic from '@/assets/ttaerrim.jpg';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className='container mx-auto py-10 px-6 md:px-12 lg:px-20'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <Image
              alt='Avatar'
              className='rounded-full w-64 h-64 object-cover mx-auto'
              style={{
                aspectRatio: '500/500',
                objectFit: 'cover',
              }}
              src={profilePic}
              width={500}
              height={500}
            />
          </div>
          <div>
            <h2 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>{`Hello, I'm Taerim Lee`}</h2>
            <p className='text-gray-700 dark:text-gray-300 mt-6 text-lg leading-relaxed'>
              I am a software developer specialized in frontend and backend development for complex scalable web apps. I
              write about software development on my blog. Want to know how I may help your project? Check out my
              project portfolio and online resume.
            </p>
            <button className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Download CV
            </button>
          </div>
        </div>
      </section>
      <section className='container mx-auto py-10 px-6 md:px-12 lg:px-20'>
        <Link href='/portfolio'>Show My Portfolio</Link>
      </section>
    </>
  );
}
