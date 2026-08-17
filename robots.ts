import { ImageConverter } from './components/ImageConverter';
import { AdSenseSlot } from './components/AdSenseSlot';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">브라우저에서 바로 처리 · 서버 업로드 없음</span>
            <h1>사진을 더 가볍고, 더 정확하게.</h1>
            <p>사진의 비율, 픽셀 크기, 단위, 품질, 파일 형식을 원하는 기준으로 바꾸세요. 별도 프로그램 설치 없이 웹에서 바로 사용할 수 있습니다.</p>
            <div className="hero-actions">
              <a href="#converter" className="btn btn-primary">사진 변환 시작</a>
              <a href="#features" className="btn btn-secondary">기능 살펴보기</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="이미지 변환 도구 미리보기">
            <div className="hero-card">
              <div className="hero-card-top"><strong>이미지 변환기 Converter</strong><span className="mini-badge">Private by design</span></div>
              <div className="preview-box"><div className="preview-placeholder"><strong>사진 업로드</strong><span>비율 · 크기 · 품질 · 형식 조절</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container trust-grid">
          <div className="trust-card"><strong>브라우저 내 처리</strong><span>이미지 변환 데이터는 변환 서버로 전송하지 않는 구조</span></div>
          <div className="trust-card"><strong>JPEG · PNG · WebP</strong><span>웹에서 자주 사용하는 출력 형식 지원</span></div>
          <div className="trust-card"><strong>반응형 UI</strong><span>320px부터 대형 데스크톱 화면까지 대응</span></div>
        </div>
      </section>

      <div className="container"><AdSenseSlot slot={process.env.NEXT_PUBLIC_ADSENSE_HOME_TOP_SLOT} /></div>

      <ImageConverter />

      <div className="container"><AdSenseSlot slot={process.env.NEXT_PUBLIC_ADSENSE_HOME_MID_SLOT} /></div>

      <section id="features" className="section">
        <div className="container">
          <div className="section-title"><h2>필요한 작업을 한 화면에서</h2><p>단순한 압축 기능이 아니라 실제 업로드 전에 필요한 기본 편집 작업을 한 번에 수행하도록 구성했습니다.</p></div>
          <div className="cards-3">
            <article className="service-card"><div className="icon-box">↔</div><h3>비율 변경</h3><p>1:1, 3:4, 4:3, 9:16, 16:9 및 원본 비율을 선택하고 중앙 기준으로 크롭합니다.</p></article>
            <article className="service-card"><div className="icon-box">↙</div><h3>픽셀·단위 조절</h3><p>px를 기본으로 cm, mm, in 단위를 선택하고 DPI 기준으로 출력 픽셀을 계산합니다.</p></article>
            <article className="service-card"><div className="icon-box">◌</div><h3>품질·형식 변환</h3><p>JPEG, PNG, WebP 중 필요한 형식을 선택하고 손실 압축 품질을 조정합니다.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-grid">
          <article className="feature-card"><h2>사진 파일을 밖으로 보내지 않는 기본 구조</h2><p>이미지 선택부터 변환, 미리보기, 다운로드까지 브라우저 안에서 처리합니다.</p><ul className="feature-list"><li>원본 이미지 업로드 API 없음</li><li>변환 결과도 Blob URL로 브라우저에서 생성</li><li>페이지를 벗어나면 브라우저 메모리의 작업 대상이 정리됨</li></ul></article>
          <article className="feature-card light"><h2>업로드 규격을 맞추는 데 집중</h2><p>블로그 사진, 인스타 업로드 전 이미지, 영수증 캡처 등 “크기와 비율을 맞춰야 하는 상황”을 한 흐름으로 처리합니다.</p><ul className="feature-list"><li>모바일에서도 조작 가능한 큰 컨트롤</li><li>출력 크기와 형식 확인 가능</li><li>변환 후 다운로드·복사·공유 제공</li></ul></article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title"><h2>사용 상황</h2><p>허위 사용 후기나 가공된 수치를 만들지 않고, 실제 기능이 필요한 상황만 제시합니다.</p></div>
          <div className="case-grid">
            <article className="case-card"><div className="case-label">BLOG</div><h3>블로그 업로드 전</h3><p>사진이 너무 크거나 용량이 큰 경우 가로·세로 픽셀과 품질을 조정합니다.</p></article>
            <article className="case-card"><div className="case-label">RECEIPT</div><h3>영수증 캡처</h3><p>세로로 긴 캡처 이미지를 필요한 비율과 크기로 정리합니다.</p></article>
            <article className="case-card"><div className="case-label">SOCIAL</div><h3>SNS 공유 전</h3><p>1:1, 4:3, 3:4, 9:16, 16:9 같은 기본 비율로 빠르게 재구성합니다.</p></article>
          </div>
          <div className="notice">성공 사례 수치와 사용자 후기는 실제 데이터가 확보된 뒤에만 공개하도록 설계했습니다. 현재는 사실과 기능만 제공합니다.</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title"><h2>후기</h2><p>현재 공개된 검증 가능한 사용자 후기 데이터가 없으므로 임의의 평점·후기를 표시하지 않습니다.</p></div>
          <div className="legal"><p style={{margin:0,color:'var(--muted)'}}>실제 서비스 운영 후 동의받은 사용자 후기만 이 영역에 게시할 수 있도록 구성했습니다.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title"><h2>자주 묻는 질문</h2><p>변환 방식과 개인정보 처리에 대해 먼저 확인하세요.</p></div>
          <div className="faq-list">
            <details><summary>사진이 서버에 저장되나요?</summary><div className="faq-answer">이미지 변환 기능은 브라우저의 파일 API와 Canvas를 사용하도록 설계되어 변환 서버에 원본 이미지를 보내지 않습니다.</div></details>
            <details><summary>원본 EXIF 정보도 같이 저장되나요?</summary><div className="faq-answer">Canvas로 새 이미지를 생성하기 때문에 원본의 일반적인 EXIF 데이터는 그대로 보존하는 방식이 아닙니다. 출력 파일에는 필요한 DPI 메타데이터만 다시 기록합니다.</div></details>
            <details><summary>메일 버튼은 자동으로 파일을 첨부하나요?</summary><div className="faq-answer">웹페이지에서 메일 클라이언트의 파일 첨부 영역까지 자동 제어할 수 없으므로 메일 작성 화면만 열고 변환 파일은 사용자가 직접 첨부하도록 안내합니다.</div></details>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta"><div><h2 style={{margin:0}}>사진 규격을 바로 맞춰보세요.</h2><p>설치 없이 브라우저에서 시작할 수 있습니다.</p></div><a className="btn" style={{background:'white',color:'var(--navy)'}} href="#converter">변환 도구 열기</a></div>
        </div>
      </section>
    </>
  );
}
