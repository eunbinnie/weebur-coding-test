import Providers from '@/app/providers';
import '@/styles/globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WEEBUR 프론트엔드 코딩 과제',
  description: '위버 프론트엔드 코딩 과제',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
