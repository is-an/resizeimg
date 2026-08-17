'use client';
import { FormEvent, useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState(''); const [busy,setBusy]=useState(false); const [error,setError]=useState('');
  const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(''); setStatus('');
    const form = e.currentTarget; const data = new FormData(form);
    if (String(data.get('website') || '').trim()) return;
    const name=String(data.get('name')||'').trim(), email=String(data.get('email')||'').trim(), message=String(data.get('message')||'').trim();
    if (!name || !email || !message) { setError('이름, 이메일, 문의 내용을 모두 입력해 주세요.'); return; }
    if (message.length > 5000) { setError('문의 내용은 5,000자 이내로 입력해 주세요.'); return; }
    if (!apiUrl) { setError('문의 API가 설정되지 않았습니다. 사이트 운영자 설정을 확인해 주세요.'); return; }
    setBusy(true);
    try {
      const response = await fetch(`${apiUrl.replace(/\/$/, '')}/api/contact`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({name,email,message}) });
      const payload = await response.json().catch(()=>({}));
      if (!response.ok) throw new Error(payload?.message || '문의 전송에 실패했습니다.');
      form.reset(); setStatus('문의가 접수되었습니다.');
    } catch(e) { setError(e instanceof Error ? e.message : '문의 전송에 실패했습니다.'); }
    finally { setBusy(false); }
  }
  return <div><section className="page-hero"><div className="container"><h1>문의하기</h1><p>서비스 오류, 기능 제안, 정책 관련 문의를 남겨주세요.</p></div></section><section className="section-sm"><div className="container contact-layout"><aside className="info-card"><h2>이미지 변환기 문의</h2><p>이미지 파일 자체를 문의 API로 보내지 않는 구조입니다. 문의 폼에는 필요한 텍스트 정보만 입력해 주세요.</p><ul className="feature-list"><li>이미지 첨부를 받지 않음</li><li>서버 측 입력값 검증</li><li>D1에 문의 데이터 저장</li></ul></aside><div className="form-card"><form className="form-stack" onSubmit={submit} noValidate><div className="field"><label htmlFor="name">이름</label><input id="name" name="name" maxLength={80} autoComplete="name" required /></div><div className="field"><label htmlFor="email">이메일</label><input id="email" name="email" type="email" maxLength={254} autoComplete="email" required /></div><div className="field"><label htmlFor="message">문의 내용</label><textarea id="message" name="message" maxLength={5000} required /></div><input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" name="website" /><button className="btn btn-primary" type="submit" disabled={busy}>{busy ? '전송 중…' : '문의 보내기'}</button><div className={`status${error ? ' error' : status ? ' success' : ''}`} role="status" aria-live="polite">{error||status}</div></form></div></div></section></div>;
}
