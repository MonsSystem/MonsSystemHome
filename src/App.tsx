const projects = [
  {
    number: "01",
    category: "브랜드 웹사이트",
    title: "조용한 취향을 위한 공간",
    color: "project-card--peach",
    artwork: "artwork--interior",
  },
  {
    number: "02",
    category: "디지털 프로덕트",
    title: "매일을 가볍게 정리하는 법",
    color: "project-card--blue",
    artwork: "artwork--product",
  },
  {
    number: "03",
    category: "크리에이티브",
    title: "천천히, 오래 머무는 이야기",
    color: "project-card--yellow",
    artwork: "artwork--editorial",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  );
}

function FlowerMark() {
  return (
    <svg
      aria-hidden="true"
      className="flower-mark"
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        d="M24 7.5c4.4 0 6.1 7.6 6.1 10.1 1.8-1.8 8.6-5.7 11.7-2.6 3.1 3.1-.8 9.9-2.6 11.7 2.5 0 10.1 1.7 10.1 6.1s-7.6 6.1-10.1 6.1c1.8 1.8 5.7 8.6 2.6 11.7-3.1 3.1-9.9-.8-11.7-2.6 0 2.5-1.7 10.1-6.1 10.1s-6.1-7.6-6.1-10.1c-1.8 1.8-8.6 5.7-11.7 2.6-3.1-3.1.8-9.9 2.6-11.7-2.5 0-10.1-1.7-10.1-6.1s7.6-6.1 10.1-6.1c-1.8-1.8-5.7-8.6-2.6-11.7 3.1-3.1 9.9.8 11.7 2.6C17.9 15.1 19.6 7.5 24 7.5Z"
        transform="translate(0 -7.5) scale(.8) translate(6 6)"
      />
      <circle cx="24" cy="24" r="4" />
    </svg>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a aria-label="Morrow 홈" className="wordmark" href="#home">
          <FlowerMark />
          <span>morrow</span>
        </a>
        <nav aria-label="주요 메뉴" className="main-nav">
          <a href="#about">스튜디오</a>
          <a href="#work">작업</a>
          <a className="nav-contact" href="mailto:hello@morrow.studio">
            함께하기 <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              SMALL STUDIO, BIG IDEAS
            </p>
            <h1 id="hero-title">
              좋은 생각을
              <br />
              <span className="headline-accent">좋은 화면</span>으로.
            </h1>
            <p className="hero-description">
              브랜드의 첫인상부터 매일 쓰고 싶은 제품까지.
              <br className="desktop-break" />
              오래 기억될 디지털 경험을 함께 만듭니다.
            </p>
            <a className="button button--dark" href="#work">
              작업 둘러보기 <ArrowIcon />
            </a>
          </div>
          <div aria-label="Morrow의 창의적인 작업을 상징하는 그래픽" className="hero-art" role="img">
            <div className="hero-art__ring hero-art__ring--outer" />
            <div className="hero-art__ring hero-art__ring--inner" />
            <div className="hero-art__sun" />
            <div className="hero-art__shape hero-art__shape--left" />
            <div className="hero-art__shape hero-art__shape--right" />
            <span className="hero-art__label hero-art__label--top">A LITTLE<br />MORE HUMAN</span>
            <span className="hero-art__label hero-art__label--bottom">SEOUL · EST. 2024</span>
            <FlowerMark />
          </div>
          <div aria-hidden="true" className="hero-index">
            <span>01</span>
            <span className="hero-index__line" />
            <span>03</span>
          </div>
        </section>

        <section aria-labelledby="work-title" className="work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FEW THINGS WE MADE</p>
              <h2 id="work-title">마음을 담아 만든 작업</h2>
            </div>
            <a className="text-link" href="mailto:hello@morrow.studio">
              더 많은 이야기 <ArrowIcon />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.color}`} key={project.number}>
                <div aria-hidden="true" className={`project-artwork ${project.artwork}`}>
                  <span className="artwork-shape artwork-shape--one" />
                  <span className="artwork-shape artwork-shape--two" />
                  <span className="artwork-shape artwork-shape--three" />
                  <span className="artwork-caption">MORROW / 2025</span>
                </div>
                <div className="project-meta">
                  <div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-number">{project.number}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="about-title" className="about-section" id="about">
          <p className="eyebrow">A NOTE FROM THE STUDIO</p>
          <h2 id="about-title">
            복잡한 건 덜어내고,
            <br />
            <span>중요한 건 더 선명하게.</span>
          </h2>
          <a className="button button--light" href="mailto:hello@morrow.studio">
            프로젝트 이야기하기 <ArrowIcon />
          </a>
          <FlowerMark />
        </section>
      </main>

      <footer className="site-footer">
        <a aria-label="Morrow 홈으로" className="wordmark wordmark--footer" href="#home">
          <FlowerMark />
          <span>morrow</span>
        </a>
        <p>작은 아이디어가 좋은 화면이 되는 곳.</p>
        <span className="copyright">© 2025 MORROW STUDIO</span>
      </footer>
    </>
  );
}

export default App;
