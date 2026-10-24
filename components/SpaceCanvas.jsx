'use client';

import { useEffect, useRef } from 'react';

// A 3D star field. Stars fly toward the camera, scrolling speeds them into streaks,
// the pointer shifts the vanishing point, and scroll depth rolls the whole field.
export default function SpaceCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const DEPTH = 1400;
    const FOCAL = 520;
    const COUNT = window.innerWidth < 700 ? 220 : 420;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let half = 0;
    let raf = 0;
    let mx = 0;
    let my = 0;
    let tmx = 0;
    let tmy = 0;
    let vel = 0;
    let lastY = window.scrollY;
    let lastVarX = 99;
    let lastVarY = 99;
    const stars = [];

    const spawn = (s, anywhere) => {
      const reach = half * 1.3;
      s.x = (Math.random() - 0.5) * 2 * reach;
      s.y = (Math.random() - 0.5) * 2 * reach;
      s.z = anywhere ? 30 + Math.random() * (DEPTH - 30) : DEPTH;
      s.size = 0.5 + Math.random() * 1.1;
      s.warm = Math.random() < 0.08;
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      half = Math.hypot(w, h) / 2;
      stars.length = 0;
      for (let i = 0; i < COUNT; i += 1) {
        const s = {};
        spawn(s, true);
        stars.push(s);
      }
    };

    const draw = (moving) => {
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      vel += (Math.min(Math.abs(dy), 90) - vel) * 0.12;
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;

      if (Math.abs(mx - lastVarX) > 0.004 || Math.abs(my - lastVarY) > 0.004) {
        lastVarX = mx;
        lastVarY = my;
        root.style.setProperty('--mx', mx.toFixed(3));
        root.style.setProperty('--my', my.toFixed(3));
      }

      const max = Math.max(1, document.documentElement.scrollHeight - h);
      const roll = (y / max) * 0.55 - 0.08;
      const speed = moving ? 0.9 + vel * 0.9 : 0;
      const trail = moving ? 2.5 + vel * 0.7 : 0;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.translate(w / 2 - mx * 28, h / 2 - my * 20);
      ctx.rotate(roll);
      ctx.lineCap = 'round';

      for (let i = 0; i < stars.length; i += 1) {
        const s = stars[i];
        s.z -= speed;
        if (s.z < 24) spawn(s, false);
        const k = FOCAL / s.z;
        const sx = s.x * k;
        const sy = s.y * k;
        if (sx * sx + sy * sy > half * half * 2.2) continue;
        const zp = s.z + speed * trail;
        const kp = FOCAL / zp;
        const alpha = Math.min(1, (1 - s.z / DEPTH) * 1.4 + 0.05);
        ctx.strokeStyle = s.warm
          ? `rgba(255,190,110,${alpha.toFixed(3)})`
          : `rgba(205,225,255,${alpha.toFixed(3)})`;
        ctx.lineWidth = Math.min(2.4, Math.max(0.4, s.size * k * 0.9));
        ctx.beginPath();
        ctx.moveTo(s.x * kp, s.y * kp);
        ctx.lineTo(sx + 0.01, sy + 0.01);
        ctx.stroke();
      }
    };

    const loop = () => {
      draw(true);
      raf = requestAnimationFrame(loop);
    };

    const onPointer = (e) => {
      tmx = (e.clientX / w - 0.5) * 2;
      tmy = (e.clientY / h - 0.5) * 2;
    };

    resize();
    window.addEventListener('resize', resize);

    if (reduce) {
      draw(false);
      const redraw = () => draw(false);
      window.addEventListener('resize', redraw);
      window.addEventListener('scroll', redraw, { passive: true });
      return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('resize', redraw);
        window.removeEventListener('scroll', redraw);
      };
    }

    window.addEventListener('pointermove', onPointer, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);

  return (
    <>
      <div className="nebula" aria-hidden="true" />
      <canvas ref={ref} className="space" aria-hidden="true" />
    </>
  );
}
