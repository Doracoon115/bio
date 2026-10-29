/* ===== 모든 페이지 공통 ===== */
const PI_NAMES = ["김두현*","김두현"];

const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* Pages CMS에서 수정하는 내용(data/*.json) 읽기 */
const loadData = name => fetch('data/'+name+'.json', {cache:'no-cache'}).then(r => r.json());
/* CMS 서식 글(rich-text)의 문단(<p>)들을 하나씩 꺼냄 */
const paras = html => {
  const d = document.createElement('div'); d.innerHTML = html || '';
  const ps = [...d.children].filter(e => e.tagName === 'P');
  return ps.length ? ps.map(p => p.innerHTML) : [d.innerHTML];
};

document.getElementById('yr').textContent = new Date().getFullYear();

/* 예전 주소(index.html#professor 등)로 들어오면 해당 메뉴 페이지로 이동 */
const OLD_VIEW = location.hash.slice(1);
if(['professor','research','publications','members','news','contact'].includes(OLD_VIEW)) location.replace(OLD_VIEW+'.html');
