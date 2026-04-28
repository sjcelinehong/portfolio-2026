// ========================================
// 프로젝트 데이터
// ========================================

const projects = [
  {
    title: "현대건설 힐스테이트 웹배너 시리즈",
    desc: "준공소식 5회차 웹배너 — 맞춤 일러스트 20컷, 채택률 40% 이상 유지",
    tags: ["Illustrator", "InDesign", "브랜드디자인"],
    year: "2024",
    result: "고객 체류시간 1.3배 증가 · 시리즈 톤앤매너 가이드 정립",
    gradient: "linear-gradient(135deg, #1a0d1a, #2d1a2d)",
    github: null,
    demo: "#"
  },
  {
    title: "서식류 디자인 시스템",
    desc: "사업지별 색상·패턴 반영 템플릿형 서식 16종 + 스타일 가이드 수립",
    tags: ["Illustrator", "InDesign", "시스템 설계"],
    year: "2024",
    result: "반복 요청 70% 감소 · 문서 일관성 90% 이상 유지",
    gradient: "linear-gradient(135deg, #0d1a1f, #1a2d33)",
    github: null,
    demo: "#"
  }
];

const sideProjects = [
  { title: "업클로즈(Up-close) 전시 콘텐츠", tags: "Photoshop · InDesign · 작가 28인 협업", year: "2022", url: "#" },
  { title: "아트바이(Artbuy) 전시 홍보 비주얼", tags: "Illustrator · SNS카드 280장 · 참여율 +40%", year: "2022", url: "#" },
  { title: "경쟁 PT용 썸네일 디자인", tags: "Illustrator · Photoshop · 일 3종 이상", year: "2024", url: "#" }
];

const skills = {
  track1: [
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Illustrator", icon: "https://cdn.simpleicons.org/adobeillustrator/FF9A00" },
    { name: "Photoshop", icon: "https://cdn.simpleicons.org/adobephotoshop/31A8FF" },
    { name: "InDesign", icon: "https://cdn.simpleicons.org/adobeindesign/FF3366" },
    { name: "Lightroom", icon: "https://cdn.simpleicons.org/adobelightroom/31A8FF" },
    { name: "PowerPoint", icon: "https://cdn.simpleicons.org/microsoftpowerpoint/B7472A" },
    { name: "Excel", icon: "https://cdn.simpleicons.org/microsoftexcel/217346" }
  ],
  track2: [
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" }
  ]
};

// ========================================
// DOM 요소 선택
// ========================================

const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const progressBar = document.getElementById('progress-bar');
const spotlight = document.getElementById('spotlight');
const projectsContainer = document.getElementById('projectsContainer');
const sideProjectsList = document.getElementById('sideProjectsList');
const marqueeTrack1 = document.getElementById('marqueeTrack1');
const marqueeTrack2 = document.getElementById('marqueeTrack2');
const emailLink = document.querySelector('.email-link');
const toast = document.getElementById('toast');

// ========================================
// 1. 네비게이션 스크롤 효과
// ========================================

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ========================================
// 2. 햄버거 메뉴
// ========================================

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// 네비 링크 클릭 시 메뉴 닫기
if (navLinks) {
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// ========================================
// 3. 진행률 바
// ========================================

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + '%';
}, { passive: true });

// ========================================
// 4. 스포트라이트 효과
// ========================================

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(200, 241, 53, 0.04), transparent)`;
}, { passive: true });

// ========================================
// 5. 프로젝트 카드 렌더링
// ========================================

function renderProjects() {
  projectsContainer.innerHTML = projects.map((project, index) => `
    <a class="project-card" href="${project.demo}" target="_blank" rel="noopener noreferrer">
      <div class="card-image">
        <div class="card-tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
        <div class="card-year">${project.year}</div>
      </div>
      <div class="card-body">
        <div>
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
        </div>
        <span class="card-cta">자세히 보기 →</span>
      </div>
    </a>
  `).join('');
}

function renderSideProjects() {
  sideProjectsList.innerHTML = sideProjects.map(project => `
    <li>
      <span class="project-name">${project.title}</span>
      <span class="project-tags">${project.tags}</span>
      <div>
        <span class="project-year">${project.year}</span> <span style="margin-left: 8px;">→</span>
      </div>
    </li>
  `).join('');

  // 사이드 프로젝트 클릭 효과
  const projectItems = sideProjectsList.querySelectorAll('li');
  projectItems.forEach(item => {
    item.addEventListener('click', () => {
      window.open(sideProjects[Array.from(projectItems).indexOf(item)].url, '_blank');
    });
  });
}

renderProjects();
renderSideProjects();

// ========================================
// 6. 스킬 마퀴 렌더링
// ========================================

function renderMarquee() {
  const track1HTML = skills.track1.map(skill => `
    <div class="marquee-item">
      <img src="${skill.icon}" alt="${skill.name}" width="20" height="20" loading="lazy">
      <span>${skill.name}</span>
    </div>
  `).join('');

  const track2HTML = skills.track2.map(skill => `
    <div class="marquee-item">
      <img src="${skill.icon}" alt="${skill.name}" width="20" height="20" loading="lazy">
      <span>${skill.name}</span>
    </div>
  `).join('');

  // 마퀴는 무한 루프를 위해 콘텐츠를 2번 복제
  marqueeTrack1.innerHTML = track1HTML + track1HTML;
  marqueeTrack2.innerHTML = track2HTML + track2HTML;
}

renderMarquee();

// ========================================
// 7. IntersectionObserver - 섹션 애니메이션
// ========================================

const revealElements = document.querySelectorAll('.reveal');

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || '0s';
      entry.target.style.transitionDelay = delay;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));

// ========================================
// 8. 이메일 복사 기능
// ========================================

if (emailLink) {
  emailLink.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = emailLink.textContent;
    
    try {
      await navigator.clipboard.writeText(email);
      showToast(`${email} 이메일이 복사되었습니다 ✓`);
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
    }
  });
}

// ========================================
// 9. Toast 알림
// ========================================

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// ========================================
// 10. 페이지 로드 완료
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('포트폴리오 로드 완료 ✓');
});

// ========================================
// 11. 터미널 라인 입장 애니메이션 (선택)
// ========================================

const terminalBlock = document.querySelector('.terminal-block');
const terminalObserverOptions = {
  threshold: 0.3
};

const terminalObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      terminalObserver.unobserve(entry.target);
    }
  });
}, terminalObserverOptions);

if (terminalBlock) {
  terminalObserver.observe(terminalBlock);
}

// ========================================
// 12. 모바일 네비게이션 - 메뉴 오버레이
// ========================================

function createMobileMenu() {
  const navMenu = document.createElement('div');
  navMenu.className = 'nav-menu';
  navMenu.id = 'navMenu';
  
  const links = ['About', 'Projects', 'Skills', 'Contact'];
  const ids = ['about', 'projects', 'skills', 'contact'];
  
  const menuHTML = links.map((link, idx) => 
    `<a href="#${ids[idx]}">${link}</a>`
  ).join('');
  
  navMenu.innerHTML = menuHTML;
  document.body.appendChild(navMenu);
  
  // 메뉴 링크 클릭 시 닫기
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// 모바일 환경 체크
if (window.innerWidth <= 768) {
  createMobileMenu();
}

// ========================================
// 13. 반응형 메뉴 토글 수정 (모바일)
// ========================================

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
      navMenu.classList.toggle('active');
    } else {
      // 첫 클릭 시 메뉴 생성
      createMobileMenu();
      setTimeout(() => {
        document.getElementById('navMenu').classList.toggle('active');
      }, 0);
    }
  });
}
