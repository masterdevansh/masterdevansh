import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './components/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { year: '2022', title: 'Sunrise Foundations', theme: 'sunrise' },
  { year: '2023', title: 'Bright Build Phase', theme: 'day' },
  { year: '2024', title: 'Sunset Depth', theme: 'sunset' },
  { year: '2025', title: 'Night City Momentum', theme: 'night' },
  { year: '2026', title: 'Present Spotlight', theme: 'present' },
  { year: 'Future', title: 'Your journey continues…', theme: 'future' },
];

const projects = {
  2022: [{ title: 'ERP Core', description: 'Inventory + payroll baseline architecture.', tech: 'React · Node · PostgreSQL' }],
  2023: [{ title: 'Smart Home Dashboard', description: 'Real-time device telemetry and control panels.', tech: 'React · MQTT · Charts' }],
  2024: [{ title: 'UI App Suite', description: 'Reusable design system powering 6 internal tools.', tech: 'Storybook · Tailwind · Tokens' }],
  2025: [{ title: 'Neon Analytics', description: 'Immersive data walls with live event streams.', tech: 'WebSockets · D3 · Microfrontends' }],
  2026: [{ title: 'Present Platform', description: 'Cross-product orchestration with AI copilots.', tech: 'LLM APIs · Edge · Observability' }],
};

function App() {
  const rootRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const mobile = window.matchMedia('(max-width: 768px)').matches;
      const totalPanels = sections.length;
      const travel = mobile ? (totalPanels - 1) * window.innerWidth * 0.75 : (totalPanels - 1) * window.innerWidth;

      // Core horizontal timeline pinned to vertical scroll.
      gsap.to(trackRef.current, {
        x: -travel,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: `+=${travel * 1.1}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      if (!prefersReduced) {
        // Bike chassis micro-bounce for realism.
        gsap.to('.bike-body', {
          y: -8,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        // Wheel rotation synced to global scroll velocity.
        gsap.to('.wheel', {
          rotation: 1440,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top top',
            end: `+=${travel * 1.1}`,
            scrub: true,
          },
        });

        // Parallax layers for cinematic depth.
        gsap.to('.parallax-slow', { xPercent: -10, ease: 'none', scrollTrigger: { trigger: rootRef.current, start: 'top top', end: `+=${travel}`, scrub: true } });
        gsap.to('.parallax-mid', { xPercent: -18, ease: 'none', scrollTrigger: { trigger: rootRef.current, start: 'top top', end: `+=${travel}`, scrub: true } });
        gsap.to('.parallax-fast', { xPercent: -28, ease: 'none', scrollTrigger: { trigger: rootRef.current, start: 'top top', end: `+=${travel}`, scrub: true } });
      }

      // Reveal project cards per year with fade/slide.
      gsap.utils.toArray('.year-panel').forEach((panel) => {
        const cards = panel.querySelectorAll('.project-card');
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
            containerAnimation: ScrollTrigger.getAll()[0],
            start: 'left 70%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed left-6 top-6 z-50 flex items-center gap-3 rounded-full bg-black/35 px-4 py-2 text-sm backdrop-blur">
        <span className="h-2 w-2 animate-ping rounded-full bg-cyan-300" />
        Scroll to explore
      </div>

      <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {sections.map((item) => (
          <span key={item.year} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs backdrop-blur">
            {item.year}
          </span>
        ))}
      </div>

      <section ref={rootRef} className="relative h-screen">
        <div className="absolute inset-0">
          <div className="parallax-slow absolute inset-0 bg-[radial-gradient(circle_at_top,_#f59e0b_0%,_#f97316_32%,_#0f172a_85%)] opacity-70" />
          <div className="parallax-mid absolute bottom-[20%] left-0 h-56 w-[220%] bg-[linear-gradient(90deg,_#1f2937_0%,_#475569_40%,_#0f172a_100%)] [clip-path:polygon(0_60%,25%_35%,55%_55%,75%_25%,100%_60%,100%_100%,0_100%)] opacity-60" />
          <div className="parallax-fast absolute bottom-[14%] left-0 h-40 w-[240%] bg-[repeating-linear-gradient(90deg,_#0f172a,_#0f172a_120px,_#14532d_120px,_#14532d_220px)] opacity-60" />
        </div>

        <div ref={trackRef} className="relative flex h-full w-[600vw]">
          {sections.map(({ year, title, theme }) => (
            <div
              key={year}
              className={`year-panel relative flex h-full w-screen flex-col justify-center px-8 md:px-16 ${theme}`}
            >
              <h2 className="text-5xl font-black tracking-tight md:text-7xl">{year}</h2>
              <p className="mt-4 max-w-lg text-lg text-white/90 md:text-xl">{title}</p>

              <div className="mt-10 flex flex-wrap gap-4">
                {(projects[year] || []).map((project) => (
                  <ProjectCard key={project.title} {...project} neon={theme === 'night' || theme === 'present'} />
                ))}
              </div>

              {theme === 'present' && <p className="mt-10 text-3xl font-bold text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">Present</p>}
              {theme === 'future' && <p className="mt-12 text-2xl italic text-white/80">Your journey continues…</p>}
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 h-[16vh] w-[220%] animate-roadMove bg-[repeating-linear-gradient(90deg,_#1e293b_0_90px,_#334155_90px_180px)]" />
        <div className="absolute bottom-[7vh] left-0 h-2 w-[220%] animate-dashMove bg-[repeating-linear-gradient(90deg,_transparent_0_35px,_#f8fafc_35px_60px)] opacity-85" />

        <div className="bike-body pointer-events-none absolute bottom-[8vh] left-1/2 z-40 -translate-x-1/2">
          <div className="relative">
            <img
              alt="motorbike"
              className="h-24 w-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] md:h-32"
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=640&q=60"
            />
            <span className="wheel absolute -bottom-1 left-5 h-7 w-7 rounded-full border-4 border-slate-900 bg-slate-300 md:h-8 md:w-8" />
            <span className="wheel absolute -bottom-1 right-6 h-7 w-7 rounded-full border-4 border-slate-900 bg-slate-300 md:h-8 md:w-8" />
            <span className="absolute -left-10 top-8 h-5 w-16 rounded-full bg-slate-400/30 blur-md animate-pulseSmoke" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
