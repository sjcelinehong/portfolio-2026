/* 프로젝트 데이터 */

const projects = [
  {
    title: "가족 건강 관리 어플 - 웰리오",
    desc: "리서치 100%, 기획 60%, 가족 관련 요소 디자인 100%",
    tags: ["Figma", "Prototype", "프로덕트디자인"],
    year: "2025",
/*     result: "고객 체류시간 1.3배 증가 · 시리즈 톤앤매너 가이드 정립", */
    github: null,
    demo: "https://www.figma.com/deck/bxyLNKQbW6zapPgZdZcVVo/-AI-%EC%B1%97%EB%B4%87%EC%A7%80%EC%9B%90-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0--%EA%B2%B0%EA%B3%BC%EB%B3%B4%EA%B3%A0%EC%84%9C_%EB%B3%B4%EB%9E%8C3%EC%A1%B0--Wellio---Copy-?node-id=7270-2678&viewport=277%2C312%2C0.09&t=TkKcfCQcEcYc1Toq-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
  },
  {
    title: "한국 최초 증류소 - 기원의 영문 웹사이트",
    desc: "리서치 80%, 기획 50%, 메인 페이지 및 뉴스, QnA 페이지의 디자인 100% 및 개발 100%",
    tags: ["Figma", "SPA", "가상 웹사이트 제작"],
    year: "2025",
/*     result: "반복 요청 70% 감소 · 문서 일관성 90% 이상 유지", */
    github: "https://ki-one.netlify.app/",
    demo: "https://www.figma.com/deck/euznkIy2CvKrJZHcYTXtne/-%ED%8C%80%ED%94%8C1-4%EC%A1%B0--%EA%B2%B0%EA%B3%BC%EB%B3%B4%EA%B3%A0%EC%84%9C_Ki-One-whisky--%EC%B9%A0%EB%A9%B4%EC%A1%B0---%EB%B3%B5%EC%82%AC---Copy-?node-id=2886-4277&viewport=-16698%2C-5546%2C0.7&t=Xu8CakTfqKGMkCMY-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
  }
];

const sideProjects = [
  { title: "AS-IS를 넘어 TO-BE로, 투비컨티뉴드", tags: "Figma · AI · Photoshop", year: "2026", url: "https://www.figma.com/deck/Ww6p1oC2XjYlT1IFFkRnl2/TOBE?node-id=1-586&p=f&viewport=-63%2C144%2C0.22&t=rM1HvNYMyqMdTYZy-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" },
  { title: "2024 - Portfolio", tags: "Illustrator · Photoshop · InDesign", year: "2024", url: "https://www.figma.com/deck/qcVZOckIUVxVkK4LIrqpcr/%EC%A0%84%EC%9E%91?node-id=1-110&p=f&viewport=487%2C206%2C0.22&t=WGzEw8xk8jonY9Se-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" },
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

/* 함수 */

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

/* 네비게이션 스크롤 */

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* 햄버거 */

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

/* 진행률 */

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + '%';
}, { passive: true });

/* 하이라이트 */

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(200, 241, 53, 0.04), transparent)`;
}, { passive: true });

/* 프로젝트 카드 */

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

/* 스킬 마퀴 */

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

/* 섹션 애니메이션 */

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

/* 이메일복사 */

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

/* 페이지 로드 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('포트폴리오 로드 완료 ✓');
});

/* 터미널 애니메이션 */

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

/* 메뉴 오버레이 */

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

/* 반응형 메뉴 */

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
