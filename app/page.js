import SpaceCanvas from '../components/SpaceCanvas';
import Nav from '../components/Nav';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import HeroStage from '../components/HeroStage';
import ContactForm from '../components/ContactForm';
import { site, links, hero, about, services, projects, contact } from '../data/content';

const icons = {
  app: (
    <svg viewBox="0 0 28 28" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="5" width="22" height="18" rx="2" />
      <path d="M3 10h22M8 7.5h.01M11 7.5h.01" />
    </svg>
  ),
  motion: (
    <svg viewBox="0 0 28 28" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 21C10 4 17 25 24 7" />
      <circle cx="4" cy="21" r="2" />
      <circle cx="24" cy="7" r="2" />
    </svg>
  ),
  launch: (
    <svg viewBox="0 0 28 28" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M14 3l6 9-6 4-6-4z" />
      <path d="M14 16v9M10 21l4 4 4-4" />
    </svg>
  ),
};

export default function Page() {
  return (
    <>
      <SpaceCanvas />
      <Nav brand={site.brand} links={links} />

      <main>
        <section id="top" className="hero">
          <div className="wrap hero-grid">
            <div>
              <Reveal>
                <span className="status">
                  <i className="pulse" aria-hidden="true" />
                  {site.status}
                </span>
              </Reveal>
              <Reveal delay={90}>
                <h1>
                  {hero.lead} <span className="depth">{hero.accent}</span>
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="lede">{hero.body}</p>
              </Reveal>
              <Reveal delay={270}>
                <div className="cta">
                  <a href="#work" className="btn btn-primary">
                    See the work
                  </a>
                  <a href="#contact" className="btn btn-ghost">
                    Start a project
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <HeroStage photo={site.photo} brand={site.brand} role={site.role} />
            </Reveal>
          </div>
        </section>

        <section id="about">
          <div className="wrap about-grid">
            <Reveal>
              <p className="eyebrow">About</p>
              <h2>{about.heading}</h2>
            </Reveal>
            <Reveal delay={120}>
              {about.body.map((p) => (
                <p key={p} className="prose">
                  {p}
                </p>
              ))}
              <ul className="chips" aria-label="Toolkit">
                {about.toolkit.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">Services</p>
              <h2>What I build for you</h2>
            </Reveal>
            <div className="cards">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 110}>
                  <article className="card">
                    <span className="icon">{icons[s.icon]}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">Work</p>
              <h2>Selected projects</h2>
            </Reveal>
            <div className="projects">
              {projects.map((p, i) => {
                const card = (
                  <TiltCard className="project">
                    <div className="thumb">
                      <div className="art" style={{ '--c1': p.c1, '--c2': p.c2 }} aria-hidden="true" />
                      {p.logo && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img className="logo" src={p.logo} alt={`${p.name} logo`} loading="lazy" />
                      )}
                    </div>
                    <div className="pbody">
                      <div className="ptop">
                        <h3>{p.name}</h3>
                        {p.sample && <span className="sample">Sample</span>}
                        {p.here && <span className="sample here">You are here</span>}
                      </div>
                      <p>{p.text}</p>
                      <ul className="tags">
                        {p.tags.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                      {p.link && (
                        <span className="visit">
                          Visit site <span aria-hidden="true">↗</span>
                        </span>
                      )}
                    </div>
                  </TiltCard>
                );
                return (
                  <Reveal key={p.name} delay={(i % 3) * 110}>
                    {p.link ? (
                      <a href={p.link} className="plink" target="_blank" rel="noopener noreferrer">
                        {card}
                      </a>
                    ) : (
                      card
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap contact-grid">
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h2>{contact.heading}</h2>
              <p className="prose">{contact.body}</p>
            </Reveal>
            <Reveal delay={140}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap foot-in">
          <span>
            © {new Date().getFullYear()} {site.brand}
          </span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}