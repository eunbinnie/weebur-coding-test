import Providers from '@/app/providers';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Toaster } from 'sonner';

import { cn } from '@/lib/utils';

const pretendard = localFont({
  src: [
    { path: '../../public/fonts/Pretendard-Thin.woff2', weight: '100' },
    { path: '../../public/fonts/Pretendard-ExtraLight.woff2', weight: '200' },
    { path: '../../public/fonts/Pretendard-Light.woff2', weight: '300' },
    { path: '../../public/fonts/Pretendard-Regular.woff2', weight: '400' },
    { path: '../../public/fonts/Pretendard-Medium.woff2', weight: '500' },
    { path: '../../public/fonts/Pretendard-SemiBold.woff2', weight: '600' },
    { path: '../../public/fonts/Pretendard-Bold.woff2', weight: '700' },
    { path: '../../public/fonts/Pretendard-ExtraBold.woff2', weight: '800' },
    { path: '../../public/fonts/Pretendard-Black.woff2', weight: '900' },
  ],
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'WEEBUR 프론트엔드 코딩 과제',
  description: '위버 프론트엔드 코딩 과제',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={cn(pretendard.variable)}>
      <body className='font-pretendard'>
        <Providers>
          <main className='mx-auto my-10 max-w-screen-xl px-4 lg:px-6'>
            {children}
          </main>
          {modal}
          <Toaster theme='system' position='top-right' richColors />
        </Providers>
      </body>
    </html>
  );
}
