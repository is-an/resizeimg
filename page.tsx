import Link from 'next/link';
export default function NotFound() { return <div className="section"><div className="container legal"><h1>페이지를 찾을 수 없습니다.</h1><p>요청하신 페이지가 존재하지 않거나 주소가 변경되었습니다.</p><Link className="btn btn-primary" href="/">홈으로 이동</Link></div></div>; }
