function ContactPage() {
  return (
    <>
      <section className="banner reveal">
        <h1>Entrer en contact avec l'équipe</h1>
        <p>Expliquez-nous vos défis agricoles, vos ambitions territoriales ou vos projets d'innovation. Nous vous répondons sous 48 heures.</p>
      </section>

      <section className="section reveal">
        <p className="section-title">Nous écrire</p>
        <h2>Nous sommes à l'écoute</h2>
        <div className="contact-grid">
          <div>
            <div className="card">
              <h3>Coordonnées principales</h3>
              <p>
                <strong>Email :</strong> <a href="mailto:contact@terresdavenir.org">contact@terresdavenir.org</a>
              </p>
              <p>
                <strong>Téléphone :</strong> +33 1 84 25 62 90
              </p>
              <p>
                <strong>Adresse :</strong> 45 Rue des Horizons, 75011 Paris
              </p>
              <div className="partners">
                <span className="partner-tag">Rendez-vous sur site</span>
                <span className="partner-tag">Visio-projets</span>
                <span className="partner-tag">Diagnostics express</span>
              </div>
            </div>
            <div className="card">
              <h3>Discutons de...</h3>
              <ul>
                <li>Vos ambitions de transition agroécologique</li>
                <li>Le montage de projets collectifs et territoriaux</li>
                <li>Le financement et la mesure d'impact</li>
                <li>La mise en relation avec des partenaires</li>
              </ul>
            </div>
          </div>
          <div className="form-card">
            <form>
              <label htmlFor="name">Nom et prénom</label>
              <input type="text" id="name" name="name" placeholder="Votre nom" required />

              <label htmlFor="email">Adresse e-mail</label>
              <input type="email" id="email" name="email" placeholder="vous@exemple.fr" required />

              <label htmlFor="organisation">Organisation</label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                placeholder="Nom de l'exploitation, collectivité..."
              />

              <label htmlFor="topic">Sujet de la demande</label>
              <select id="topic" name="topic">
                <option value="diagnostic">Diagnostic ou audit</option>
                <option value="programme">Intégrer un programme</option>
                <option value="partenariat">Partenariat et financement</option>
                <option value="ressources">Accès aux ressources</option>
                <option value="autre">Autre</option>
              </select>

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Décrivez votre projet ou votre besoin"></textarea>

              <button className="btn btn-primary" type="submit">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section highlight reveal">
        <div>
          <h3>Planifier une visite terrain</h3>
          <p>
            Nous organisons des immersions et diagnostics directement sur vos exploitations pour co-construire des plans d'action
            adaptés.
          </p>
        </div>
        <div className="columns">
          <article className="card">
            <h3>Visites express</h3>
            <p>Analyse des parcelles et recommandations premières sous 72 heures.</p>
          </article>
          <article className="card">
            <h3>Ateliers collectifs</h3>
            <p>Sessions de co-design avec vos équipes, partenaires et acteurs locaux.</p>
          </article>
          <article className="card">
            <h3>Suivi annuel</h3>
            <p>Accompagnement à la mise en œuvre et à la mesure d'impact tout au long de l'année.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
