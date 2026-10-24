'use client';

import { useEffect, useRef, useState } from 'react';

// The photo stage: a portrait frame floating in 3D between two orbiting rings.
// The whole stage leans toward the pointer.
export default function HeroStage({ photo, brand, role }) {
  const tiltRef = useRef(null);
  const imgRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(true);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setHasPhoto(false);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    const onMove = (e) => {
      const el = tiltRef.current;
      if (!el) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      el.style.setProperty('--rx', `${(-y * 14).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${(x * 18).toFixed(2)}deg`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div className="stage">
      <div className="float">
        <div className="tilt-3d" ref={tiltRef}>
          <div className="ring ring-a" aria-hidden="true" />
          <div className="frame">
            <div className="ph" aria-hidden={hasPhoto}>
              <b>W</b>
              <small>Add your photo at public/photo.jpg</small>
            </div>
            {hasPhoto && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                ref={imgRef}
                src={photo}
                alt={`Portrait of the founder of ${brand}`}
                onError={() => setHasPhoto(false)}
              />
            )}
          </div>
          <div className="ring ring-b" aria-hidden="true" />
          <div className="badge">
            <strong>{brand}</strong>
            <span>{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
