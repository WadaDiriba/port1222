'use client';

import { useEffect, useRef, useState } from 'react';

export default function Nav({ brand, links }) {
  const bar = useRef(null);
  const [active, setActive] = useState('top');

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['top', ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      io.disconnect();
    };
  }, [links]);

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#top" className="brand" aria-label={`${brand}, back to top`}>
          <span className="mark" aria-hidden="true" />
          {brand}
        </a>
        <nav className="links" aria-label="Sections">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'is-active' : ''}
              aria-current={active === l.id ? 'true' : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary btn-sm">
          Let&apos;s talk
        </a>
      </div>
      <div className="progress" ref={bar} aria-hidden="true" />
    </header>
  );
}
