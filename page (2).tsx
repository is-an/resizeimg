export const metadata = { title: 'FAQ', description: '이미지 변환기 이미지 변환 서비스 자주 묻는 질문.' };

const items = [
  ['이미지가 서버에 전송되나요?', '이미지 변환 자체는 브라우저에서 수행하도록 구현했습니다. 변환 기능을 위해 원본 이미지 파일을 서버 API로 전송하지 않습니다.'],
  ['최대 파일 크기는 얼마인가요?', '현재 웹앱 UI에서는 50MB를 초과하는 파일을 선택하면 즉시 안내하고 처리를 중단합니다. 실제 지원량은 사용자의 브라우저 메모리와 기기 성능에도 영향을 받습니다.'],
  ['DPI를 바꾸면 실제 픽셀 크기도 바뀌나요?', 'cm, mm, in 단위 입력 시 DPI를 기준으로 픽셀 크기를 계산합니다. px 단위에서는 입력한 픽셀 값을 그대로 사용합니다.'],
  ['PNG도 품질 슬라이더가 적용되나요?', 'PNG는 일반적인 JPEG/WebP 손실 품질 조절 방식과 다르므로 현재 품질 슬라이더의 의미가 적용되지 않고, 출력은 PNG 형식으로 생성됩니다.'],
  ['사진이 원본과 다르게 보입니다.', '비율을 바꾸면 중앙 기준 크롭이 적용될 수 있습니다. 원본 비율을 선택하면 크롭 없이 원본 비율을 유지합니다.'],
  ['파일은 어디에 저장되나요?', '다운로드를 누르기 전까지 결과는 브라우저 메모리의 Blob URL로 다뤄집니다. 다운로드 시점에 사용자의 브라우저 다운로드 폴더 정책에 따라 저장됩니다.'],
];

export default function FAQPage() {
  return <div><section className="page-hero"><div className="container"><h1>FAQ</h1><p>이미지 변환기의 변환 방식, 개인정보, 출력 옵션에 대한 안내입니다.</p></div></section><section className="section-sm"><div className="container faq-list">{items.map(([q,a]) => <details key={q}><summary>{q}</summary><div className="faq-answer">{a}</div></details>)}</div></section></div>;
}
