import type { Metadata } from 'next';
import './globals.css';
import { pretendard } from './font';
import Cursor from '@/components/ui/Cursor';
import Header from '@/components/ui/Header';

export const metadata: Metadata = {
  title: "ttaerrim's portfolio",
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${pretendard.className} h-dvh bg-main-blue`}>
        <Header />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
