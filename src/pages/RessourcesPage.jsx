function RessourcesPage() {
  return (
    <>
      <section className="banner reveal">
        <h1>Plateforme de ressources agroécologiques</h1>
        <p>Guides pratiques, outils méthodologiques et contenus pédagogiques pour accompagner vos projets.</p>
      </section>

      <section className="section reveal">
        <p className="section-title">Guides stratégiques</p>
        <h2>Comprendre et planifier la transition</h2>
        <div className="grid">
          <article className="card">
            <h3>Feuille de route carbone</h3>
            <p>Un cadre en 8 étapes pour mesurer, réduire et compenser les émissions agricoles.</p>
          </article>
          <article className="card">
            <h3>Guide de l'agroforesterie</h3>
            <p>Schémas d'implantation, choix des essences et retours d'expérience terrain.</p>
          </article>
          <article className="card">
            <h3>Boîte à outils agroécologie</h3>
            <p>Recueil d'outils pour gérer les sols, l'eau et la biodiversité dans les exploitations.</p>
          </article>
        </div>
      </section>

      <section className="section highlight reveal">
        <div>
          <h3>Ressources multimédias</h3>
          <p>Entretiens, webinaires, ateliers et vidéos techniques animés par les membres du collectif et nos partenaires.</p>
        </div>
        <div className="columns">
          <article className="card">
            <h3>Webinaires mensuels</h3>
            <p>Sessions d'une heure pour partager des cas pratiques et répondre aux questions des agriculteurs.</p>
          </article>
          <article className="card">
            <h3>Bibliothèque vidéo</h3>
            <p>Courtes capsules de terrain démontrant les techniques régénératives et les retours sur investissement.</p>
          </article>
          <article className="card">
            <h3>Newsletter scientifique</h3>
            <p>Veille mensuelle des publications, innovations et tendances sur l'agriculture régénératrice.</p>
          </article>
        </div>
      </section>

      <section className="section reveal">
        <p className="section-title">Partage et apprentissage</p>
        <h2>Rejoindre la communauté Terres d'Avenir</h2>
        <div className="grid">
          <article className="card">
            <h3>Forum d'entraide</h3>
            <p>Espace d'échange entre agriculteurs, conseillers et chercheurs pour résoudre les défis du quotidien.</p>
          </article>
          <article className="card">
            <h3>Lab ouvert</h3>
            <p>Accès à des prototypes, formations croisées et ressources open source développées avec nos partenaires.</p>
          </article>
          <article className="card">
            <h3>Bibliothèque partagée</h3>
            <p>Collection collaborative de documents, études de cas et fiches pratiques disponibles en téléchargement.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default RessourcesPage;
