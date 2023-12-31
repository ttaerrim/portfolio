import { Climate_Crisis } from 'next/font/google';
import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
export const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
});

export const pointFont = Climate_Crisis({
  subsets: ['latin'],
  display: 'swap',
});
