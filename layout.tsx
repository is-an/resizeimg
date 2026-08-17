:root {
  --navy: #1E293B;
  --slate: #64748B;
  --sky: #38BDF8;
  --sky-strong: #0EA5E9;
  --bg: #F8FAFC;
  --card: #FFFFFF;
  --line: #E2E8F0;
  --text: #0F172A;
  --muted: #475569;
  --success: #166534;
  --danger: #B91C1C;
  --shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
  --radius-lg: 24px;
  --radius-md: 16px;
  --radius-sm: 12px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: Inter, Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.6;
}
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
a { color: inherit; text-decoration: none; }
img { max-width: 100%; height: auto; }

.skip-link {
  position: fixed;
  left: 12px;
  top: -100px;
  z-index: 1000;
  background: var(--navy);
  color: white;
  padding: 10px 14px;
  border-radius: 10px;
}
.skip-link:focus { top: 12px; }

.container { width: min(1160px, calc(100% - 32px)); margin: 0 auto; }
.section { padding: 88px 0; }
.section-sm { padding: 48px 0; }

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(248, 250, 252, 0.9);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.85);
}
.header-inner { min-height: 68px; display:flex; align-items:center; justify-content:space-between; gap: 24px; }
.logo { display:flex; align-items:center; gap: 10px; font-weight: 800; letter-spacing: -0.02em; }
.logo-mark { width: 34px; height:34px; border-radius: 11px; background: var(--navy); display:grid; place-items:center; color:white; }
.logo-mark svg { width:19px; height:19px; }
.nav { display:flex; align-items:center; gap: 18px; color: var(--muted); font-size: 14px; }
.nav a:hover { color: var(--text); }
.nav-cta { padding: 9px 14px; border-radius: 999px; background: var(--navy); color: white !important; }

.hero { padding: 86px 0 54px; }
.hero-grid { display:grid; grid-template-columns: 1.05fr 0.95fr; gap: 54px; align-items:center; }
.eyebrow { display:inline-flex; gap:8px; align-items:center; padding:7px 11px; border:1px solid #BAE6FD; background:#F0F9FF; color:#0369A1; border-radius:999px; font-size:13px; font-weight:700; }
.hero h1 { font-size: clamp(42px, 6vw, 72px); line-height:1.05; letter-spacing:-0.055em; margin: 18px 0 18px; }
.hero p { font-size: 18px; color: var(--muted); max-width: 640px; }
.hero-actions { display:flex; flex-wrap:wrap; gap:12px; margin-top:28px; }
.btn { border:1px solid transparent; min-height: 48px; padding: 0 18px; border-radius: 14px; display:inline-flex; align-items:center; justify-content:center; gap:8px; font-weight:800; }
.btn-primary { background:var(--navy); color:white; box-shadow: 0 9px 24px rgba(30,41,59,.18); }
.btn-primary:hover { background:#0F172A; }
.btn-secondary { background:white; border-color:var(--line); color:var(--text); }
.btn-secondary:hover { border-color:#CBD5E1; background:#F8FAFC; }
.btn:disabled { opacity:.5; cursor:not-allowed; }

.hero-visual { background: linear-gradient(135deg, #E0F2FE, #F8FAFC 55%, #E2E8F0); min-height: 420px; border-radius: 34px; padding:22px; display:grid; place-items:center; box-shadow: var(--shadow); }
.hero-card { width: min(100%, 460px); background: rgba(255,255,255,.88); border:1px solid rgba(255,255,255,.9); border-radius: 24px; padding:18px; box-shadow: 0 28px 70px rgba(15,23,42,.14); }
.hero-card-top { display:flex; justify-content:space-between; gap:12px; align-items:center; margin-bottom:14px; }
.mini-badge { padding:6px 9px; border-radius:999px; background:#E0F2FE; color:#0369A1; font-size:12px; font-weight:800; }
.preview-box { aspect-ratio: 4 / 3; border-radius: 16px; background: repeating-conic-gradient(#F1F5F9 0 25%, #FFFFFF 0 50%) 50% / 24px 24px; display:grid; place-items:center; overflow:hidden; }
.preview-placeholder { width:55%; height:65%; border:2px dashed #94A3B8; border-radius:18px; display:grid; place-items:center; color:#64748B; text-align:center; padding:20px; }

.trust-grid { display:grid; grid-template-columns: repeat(3, 1fr); gap:14px; }
.trust-card { padding:18px; background:white; border:1px solid var(--line); border-radius:18px; }
.trust-card strong { display:block; font-size:18px; margin-bottom:4px; }
.trust-card span { color:var(--muted); font-size:14px; }

.section-title { max-width:720px; margin-bottom:34px; }
.section-title h2 { font-size: clamp(30px, 4vw, 48px); letter-spacing:-0.04em; line-height:1.15; margin:0 0 12px; }
.section-title p { margin:0; color:var(--muted); }
.cards-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
.service-card { background:white; border:1px solid var(--line); border-radius:20px; padding:24px; }
.icon-box { width:44px; height:44px; border-radius:14px; background:#F0F9FF; color:#0369A1; display:grid; place-items:center; margin-bottom:16px; }
.icon-box svg { width:22px; height:22px; }
.service-card h3 { margin:0 0 7px; }
.service-card p { margin:0; color:var(--muted); font-size:15px; }

.feature-grid { display:grid; grid-template-columns: 1fr 1fr; gap:18px; }
.feature-card { background:var(--navy); color:white; border-radius:24px; padding:30px; }
.feature-card.light { background:white; color:var(--text); border:1px solid var(--line); }
.feature-list { margin: 18px 0 0; padding:0; list-style:none; display:grid; gap:12px; }
.feature-list li { display:flex; gap:10px; align-items:flex-start; }
.feature-list li::before { content:'✓'; color:var(--sky); font-weight:900; }

.case-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
.case-card { background:white; border:1px solid var(--line); border-radius:20px; padding:24px; }
.case-label { color:var(--sky-strong); font-size:12px; font-weight:900; letter-spacing:.04em; }
.case-card h3 { margin:7px 0; }
.case-card p { margin:0; color:var(--muted); }
.notice { margin-top:18px; padding:14px 16px; background:#F1F5F9; border:1px solid var(--line); border-radius:14px; color:#475569; font-size:13px; }

.faq-list { display:grid; gap:12px; }
details { background:white; border:1px solid var(--line); border-radius:16px; padding:18px 20px; }
summary { cursor:pointer; font-weight:800; }
.faq-answer { color:var(--muted); padding-top:10px; }

.cta { background:var(--navy); color:white; border-radius:30px; padding:46px; display:flex; justify-content:space-between; gap:24px; align-items:center; }
.cta p { color:#CBD5E1; margin:8px 0 0; }

.footer { border-top:1px solid var(--line); margin-top:60px; padding:34px 0 54px; color:var(--muted); font-size:14px; }
.footer-grid { display:flex; justify-content:space-between; gap:24px; }
.footer-links { display:flex; gap:16px; flex-wrap:wrap; }

.converter-shell { background:white; border:1px solid var(--line); border-radius:28px; padding:22px; box-shadow:var(--shadow); }
.converter-grid { display:grid; grid-template-columns: 1fr 380px; gap:22px; }
.dropzone { min-height: 420px; border:2px dashed #CBD5E1; border-radius:22px; background:#F8FAFC; display:grid; place-items:center; text-align:center; padding:28px; transition:.2s; }
.dropzone.dragging { border-color: var(--sky); background:#F0F9FF; }
.dropzone h2 { margin:0 0 8px; font-size:24px; }
.dropzone p { color:var(--muted); margin:0 0 18px; }
.file-input { position:absolute; width:1px; height:1px; opacity:0; pointer-events:none; }
.control-panel { display:grid; gap:14px; align-content:start; }
.control-group { border:1px solid var(--line); border-radius:18px; padding:16px; }
.control-group h3 { font-size:14px; margin:0 0 12px; }
.control-row { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.field { display:grid; gap:6px; }
.field label { font-size:12px; font-weight:800; color:#334155; }
.field input, .field select, .field textarea { width:100%; min-height:42px; border:1px solid #CBD5E1; border-radius:11px; padding:0 11px; background:white; color:var(--text); }
.field textarea { padding:10px 11px; min-height:140px; resize:vertical; }
.field input:focus, .field select:focus, .field textarea:focus, button:focus-visible, a:focus-visible, summary:focus-visible { outline:3px solid rgba(56,189,248,.35); outline-offset:2px; }
.segmented { display:grid; grid-template-columns:repeat(3,1fr); gap:6px; }
.seg-btn { min-height:38px; border:1px solid #CBD5E1; background:white; border-radius:10px; font-size:13px; font-weight:800; }
.seg-btn.active { background:var(--navy); color:white; border-color:var(--navy); }
.range-row { display:flex; align-items:center; gap:10px; }
.range-row input { flex:1; }
.range-value { width:58px; text-align:right; font-weight:800; font-size:13px; }
.preview-area { margin-top:18px; border:1px solid var(--line); border-radius:20px; overflow:hidden; background:#F8FAFC; }
.preview-head { padding:12px 14px; border-bottom:1px solid var(--line); background:white; display:flex; justify-content:space-between; gap:12px; align-items:center; font-size:13px; }
.preview-canvas-wrap { min-height:420px; display:grid; place-items:center; padding:16px; background:repeating-conic-gradient(#F1F5F9 0 25%, #FFFFFF 0 50%) 50% / 24px 24px; overflow:auto; }
.preview-image { max-width:100%; height:auto; display:block; transform-origin:center center; }
.status { min-height:22px; font-size:13px; }
.status.error { color:var(--danger); }
.status.success { color:var(--success); }
.action-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:8px; }

.contact-layout { display:grid; grid-template-columns: .9fr 1.1fr; gap:22px; }
.info-card { background:var(--navy); color:white; border-radius:24px; padding:28px; }
.info-card p { color:#CBD5E1; }
.form-card { background:white; border:1px solid var(--line); border-radius:24px; padding:28px; }
.form-stack { display:grid; gap:15px; }
.hp { position:absolute !important; left:-9999px !important; width:1px !important; height:1px !important; overflow:hidden !important; }

.page-hero { padding:68px 0 30px; }
.page-hero h1 { margin:0 0 12px; font-size:clamp(36px,5vw,56px); letter-spacing:-.04em; }
.page-hero p { margin:0; color:var(--muted); max-width:760px; }
.legal { background:white; border:1px solid var(--line); border-radius:22px; padding:28px; }
.legal h2 { margin-top:28px; }
.legal h2:first-child { margin-top:0; }

@media (max-width: 900px) {
  .hero-grid, .converter-grid, .contact-layout, .feature-grid { grid-template-columns:1fr; }
  .cards-3, .case-grid { grid-template-columns:1fr 1fr; }
  .hero-visual { min-height:320px; }
  .control-panel { order: -1; }
}
@media (max-width: 640px) {
  .container { width:min(100% - 24px, 1160px); }
  .section { padding:64px 0; }
  .hero { padding:56px 0 34px; }
  .nav { display:none; }
  .trust-grid, .cards-3, .case-grid { grid-template-columns:1fr; }
  .cta, .footer-grid { flex-direction:column; align-items:flex-start; }
  .cta { padding:28px; }
  .converter-shell { padding:12px; border-radius:22px; }
  .dropzone { min-height:340px; }
  .preview-canvas-wrap { min-height:300px; }
  .control-row { grid-template-columns:1fr; }
  .action-grid { grid-template-columns:1fr; }
}
@media (max-width: 390px) {
  .hero h1 { font-size:38px; }
  .btn { width:100%; }
  .hero-actions { display:grid; }
  .logo { font-size:14px; }
}
