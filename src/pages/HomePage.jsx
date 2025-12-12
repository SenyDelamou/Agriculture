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

  const featuresCards = useMemo(() => {
    if (!features) {
      return [];
    }

    if (Array.isArray(features.cards) && features.cards.length > 0) {
      return features.cards.map((card, index) => ({
        id: card.id ?? index,
        title: card.title ?? card.heading ?? '',
        description: card.description ?? card.desc ?? '',
      }));
    }

    const legacyCards = [features.diagnostic, features.fiches_leviers, features.choix_cultures].filter(Boolean);

    return legacyCards.map((card, index) => ({
      id: card.id ?? index,
      title: card.title ?? card.heading ?? '',
      description: card.description ?? card.desc ?? '',
    }));
  }, [features]);

  const fallbackCards = Array.isArray(ecosystem?.cards) ? ecosystem.cards : [];
  const displayedCards = featuresCards.length > 0 ? featuresCards : fallbackCards;
  const highlightDescription = highlight?.description ?? highlight?.desc ?? '';

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

        {/* Flagship Dashboard Visual - CSS Only Mockup */}
        <div style={{ marginTop: '4rem', padding: '1rem', background: 'rgba(255,255,255,0.4)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }}>
          <div style={{ background: '#0f172a', borderRadius: '16px', overflow: 'hidden', aspectRatio: '16/9', position: 'relative', border: '1px solid #1e293b' }}>
            {/* Mockup Header */}
            <div style={{ height: '40px', borderBottom: '1px solid #1e293b', display: 'flex', alignItems: 'center', padding: '0 1rem', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></div>
              </div>
              <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Tableau de bord - Ferme des Lilas</div>
            </div>
            {/* Mockup Body Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', height: 'calc(100% - 40px)' }}>
              {/* Sidebar */}
              <div style={{ borderRight: '1px solid #1e293b', padding: '1rem' }}>
                <div style={{ height: '8px', width: '60%', background: '#334155', borderRadius: '4px', marginBottom: '1.5rem' }}></div>
                <div style={{ height: '8px', width: '80%', background: '#1e293b', borderRadius: '4px', marginBottom: '0.8rem' }}></div>
                <div style={{ height: '8px', width: '80%', background: '#1e293b', borderRadius: '4px', marginBottom: '0.8rem' }}></div>
                <div style={{ height: '8px', width: '80%', background: '#1e293b', borderRadius: '4px', marginBottom: '0.8rem' }}></div>
              </div>
              {/* Content */}
              <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.5rem' }}>
                <div style={{ background: '#1e293b', borderRadius: '8px', padding: '1rem', border: '1px solid #334155' }}>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Santé des sols</div>
                  <div style={{ fontSize: '1.5rem', color: '#10b981', fontWeight: 'bold' }}>Optimal</div>
                  <div style={{ marginTop: '1rem', height: '40px', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                    <div style={{ width: '20%', height: '40%', background: '#059669', borderRadius: '2px' }}></div>
                    <div style={{ width: '20%', height: '60%', background: '#059669', borderRadius: '2px' }}></div>
                    <div style={{ width: '20%', height: '80%', background: '#059669', borderRadius: '2px' }}></div>
                    <div style={{ width: '20%', height: '50%', background: '#059669', borderRadius: '2px' }}></div>
                  </div>
                </div>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div style={{ background: '#1e293b', borderRadius: '8px', padding: '1rem', border: '1px solid #334155' }}>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Météo (7j)</div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.5rem' }}>☀️</span>
                      <div>
                        <div style={{ fontSize: '0.9rem', color: 'white' }}>24°C</div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Pas de pluie</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ background: '#1e293b', borderRadius: '8px', padding: '1rem', border: '1px solid #334155' }}>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Alertes</div>
                    <div style={{ fontSize: '0.8rem', color: '#f59e0b', display: 'flex', gap: '0.5rem' }}>
                      <span>⚠️</span> Risque mildiou modéré
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-title">{ecosystem?.title ?? features?.title}</div>
        <h2>{features?.headline ?? features?.title ?? ecosystem?.headline}</h2>
        <div className="grid">
          {displayedCards.map((card) => (
            <article className="card" key={card.id ?? card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section highlight reveal">
        <div>
          <h3>{highlight.title}</h3>
          <p>{highlightDescription}</p>
          <div className="partners">
            <span className="partner-tag">INRAE</span>
            <span className="partner-tag">Chambres d'Agriculture</span>
            <span className="partner-tag">La French Tech</span>
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
