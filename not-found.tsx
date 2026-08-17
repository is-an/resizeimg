import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '이미지 변환기 — 사진 용량 줄이기 · 크기 조절 · 형식 변환',
    template: '%s | 이미지 변환기',
  },
  description: '사진을 브라우저에서 바로 용량 줄이기, 크기 조절, 비율 변경, JPEG·PNG·WebP 변환까지 처리하는 온라인 이미지 변환 도구.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: '이미지 변환기 — 사진 용량 줄이기 · 크기 조절 · 형식 변환',
    description: '이미지를 업로드하고 브라우저에서 바로 크기·비율·품질·형식을 조절하세요.',
    type: 'website',
    url: siteUrl,
    siteName: '이미지 변환기',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main">본문으로 바로가기</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
