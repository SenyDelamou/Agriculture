function InvestisseursPage() {
  return (
    <>
      <section className="banner reveal">
        <h1>Connecter jeunes entrepreneurs agricoles et investisseurs</h1>
        <p>Présentez votre projet agro, trouvez des partenaires financiers ou rejoignez un fonds dédié aux transitions agricoles.</p>
      </section>

      <section className="section reveal">
        <p className="section-title">Projets à financer</p>
        <h2>Des initiatives à impact prêtes à décoller</h2>
        <div className="investor-grid">
          <article className="investor-card">
            <h3>Micro-ferme agroécologique</h3>
            <p>Montage d'une ferme de 2 ha en permaculture avec circuits courts et atelier de transformation végétale.</p>
            <div className="tag-list">
              <span className="tag">Demande : 45 k€</span>
              <span className="tag">Phase : Lancement</span>
              <span className="tag">Pays de la Loire</span>
            </div>
          </article>
          <article className="investor-card">
            <h3>AgriTech sol vivant</h3>
            <p>Développement d'une application de suivi microbiologique des sols pour coopératives céréalières.</p>
            <div className="tag-list">
              <span className="tag">Demande : 120 k€</span>
              <span className="tag">Phase : Prototype</span>
              <span className="tag">Occitanie</span>
            </div>
          </article>
          <article className="investor-card">
            <h3>Atelier de transformation laitière</h3>
            <p>Création d'une fromagerie mobile mutualisée pour trois éleveurs en conversion bio.</p>
            <div className="tag-list">
              <span className="tag">Demande : 80 k€</span>
              <span className="tag">Phase : Extension</span>
              <span className="tag">Auvergne-Rhône-Alpes</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section highlight reveal">
        <div>
          <h3>Accompagnement à la levée de fonds</h3>
          <p>Nos experts vous préparent aux rendez-vous investisseurs : pitch deck, prévisionnels, stratégie d'impact et KPIs.</p>
        </div>
        <ul className="focus-points">
          <li>Sessions de coaching collectif avec d'autres entrepreneurs agro</li>
          <li>Accès à un réseau de business angels, fonds d'impact et plateformes citoyennes</li>
          <li>Suivi après investissement pour sécuriser la mise en œuvre</li>
        </ul>
      </section>

      <section className="section reveal">
        <p className="section-title">Soumettre son projet</p>
        <h2>Déposez votre dossier en quelques clics</h2>
        <form className="pitch-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="project-name">Nom du projet</label>
          <input id="project-name" name="project-name" type="text" placeholder="Ferme partagée, appli de suivi..." />

          <label htmlFor="project-stage">Stade de maturité</label>
          <select id="project-stage" name="project-stage">
            <option value="idee">Idée</option>
            <option value="prototype">Prototype</option>
            <option value="demarrage">Démarrage</option>
            <option value="croissance">Croissance</option>
          </select>

          <label htmlFor="project-amount">Montant recherché</label>
          <input id="project-amount" name="project-amount" type="text" placeholder="Ex : 60 000 €" />

          <label htmlFor="project-description">Résumé du projet</label>
          <textarea id="project-description" name="project-description" placeholder="Objectifs, modèle économique, impacts sociaux et environnementaux" />

          <button className="btn btn-primary" type="submit">
            Soumettre le dossier (prochainement)
          </button>
          <p className="disclaimer">
            Les projets seront examinés par notre comité avant mise en relation avec les investisseurs partenaires.
          </p>
        </form>
      </section>
    </>
  );
}

export default InvestisseursPage;
