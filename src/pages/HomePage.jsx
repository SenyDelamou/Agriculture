import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext.jsx';

function HomePage() {
  const { t, trackEvent } = useApp();
  const hero = t('home.hero');
  const ecosystem = t('home.ecosystem');
  const features = t('home.features');
  const highlight = t('home.highlight');
  const testimonials = t('home.testimonials');
  const reach = t('home.reach');

  const [hectares, setHectares] = useState(25);
  const [farms, setFarms] = useState(40);
  const [participants, setParticipants] = useState(120);

  const formattedParticipants = participants; // Quick fix for display

  const reachMetrics = useMemo(() => {
    const beneficiaries = Math.round(participants * 3.2);
    const skillHours = Math.round(participants * 12.5);
    const sustainableYield = (hectares * 2.8).toFixed(1);
    const investmentVolume = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(farms * 8500 + hectares * 1200);

    return {
      beneficiaries,
      skillHours,
      sustainableYield,
      investmentVolume,
    };
  }, [hectares, farms, participants]);

  return (
    <>
      <section className="hero reveal">
        <h1>{hero.title}</h1>
        <p>{hero.subtitle}</p>
        <div className="cta-group">
          <Link
            className="btn btn-primary"
            to="/diagnostic"
            onClick={() => trackEvent('cta_click', { location: 'home_hero', target: 'diagnostic' })}
          >
            {hero.primaryCta}
          </Link>
          <Link
            className="btn btn-outline"
            to="/inscription"
            onClick={() => trackEvent('cta_click', { location: 'home_hero', target: 'signup' })}
          >
            {hero.secondaryCta}
          </Link>
        </div>
      </section>

      <section className="section reveal">
        <p className="section-title">{ecosystem.title}</p>
        <h2>{ecosystem.headline}</h2>
        <div className="grid">
          {ecosystem.cards.map(({ title, description }) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <p className="section-title">{features.title}</p>
        <h2>{features.headline}</h2>
        <div className="grid">
          {features.cards.map(({ title, description }) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <div className="highlight">
          <div>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
            <div className="partners">
              {highlight.tags.map((tag) => (
                <span className="partner-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="metrics">
            {highlight.metrics.map(({ value, label }) => (
              <div className="metric" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <p className="section-title">{testimonials.title}</p>
        <h2>{testimonials.headline}</h2>
        <div className="grid">
          {testimonials.items.map(({ quote, author }) => (
            <article className="card" key={author}>
              <blockquote style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--color-text-main)' }}>"{quote}"</blockquote>
              <p className="text-primary" style={{ fontWeight: 600 }}>{author}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reach reveal">
        <p className="section-title">{reach.title}</p>
        <h2>{reach.headline}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'start' }}>
          <form
            className="card"
            style={{ display: 'grid', gap: '1rem' }}
            onSubmit={(event) => {
              event.preventDefault();
              trackEvent('reach_form_submit', { hectares, farms, participants });
            }}
          >
            <h3 style={{ fontSize: '1.2rem' }}>Calculateur d'Impact</h3>
            <div>
              <label htmlFor="reach-hectares" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Hectares engagés</label>
              <input
                id="reach-hectares"
                type="number"
                min="1"
                className="input"
                style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)' }}
                value={hectares}
                onChange={(event) => setHectares(Number(event.target.value))}
              />
            </div>

            <div>
              <label htmlFor="reach-farms" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Fermes</label>
              <input
                id="reach-farms"
                type="number"
                min="1"
                style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)' }}
                value={farms}
                onChange={(event) => setFarms(Number(event.target.value))}
              />
            </div>

            <div>
              <label htmlFor="reach-participants" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Participants</label>
              <input
                id="reach-participants"
                type="number"
                min="1"
                style={{ width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)' }}
                value={participants}
                onChange={(event) => setParticipants(Number(event.target.value))}
              />
            </div>

            <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
              Calculer
            </button>
          </form>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <article className="card" style={{ textAlign: 'center' }}>
              <h3>{reach.labels.beneficiaries}</h3>
              <p className="text-primary" style={{ fontSize: '2rem', fontWeight: 'bold' }}>{reachMetrics.beneficiaries.toLocaleString('fr-FR')}</p>
            </article>
            <article className="card" style={{ textAlign: 'center' }}>
              <h3>{reach.labels.skillHours}</h3>
              <p className="text-primary" style={{ fontSize: '2rem', fontWeight: 'bold' }}>{reachMetrics.skillHours.toLocaleString('fr-FR')}</p>
            </article>
            <article className="card" style={{ textAlign: 'center' }}>
              <h3>{reach.labels.sustainableYield}</h3>
              <p className="text-primary" style={{ fontSize: '2rem', fontWeight: 'bold' }}>{reachMetrics.sustainableYield}</p>
            </article>
            <article className="card" style={{ textAlign: 'center' }}>
              <h3>{reach.labels.investmentVolume}</h3>
              <p className="text-primary" style={{ fontSize: '2rem', fontWeight: 'bold' }}>{reachMetrics.investmentVolume}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
