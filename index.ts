import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>이미지 변환기</strong>
          <div>브라우저에서 바로 처리하는 이미지 변환 도구</div>
        </div>
        <div className="footer-links">
          <Link href="/faq/">FAQ</Link>
          <Link href="/contact/">문의하기</Link>
          <Link href="/privacy/">개인정보처리방침</Link>
          <Link href="/terms/">이용약관</Link>
        </div>
      </div>
    </footer>
  );
}
