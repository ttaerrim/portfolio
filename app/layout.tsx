import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';

// Font files can be colocated inside of `app`
const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ttaerrim's portfolio",
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${pretendard.className} h-dvh`}>
        <header className='bg-gray-50 dark:bg-gray-800 p-8'>
          <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
              <Link href='/'>
                <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>ttaerrim</h1>
              </Link>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Contact Me
              </button>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
