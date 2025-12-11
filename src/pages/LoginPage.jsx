import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="auth-container">
      {/* Côté Visuel (Gauche) */}
      <div className="auth-side">
        <h2>Cultivez votre avenir digital.</h2>
        <p>
          Rejoignez plus de 4000 agriculteurs qui utilisent Terres d'Avenir pour optimiser leurs rendements grâce à l'IA.
        </p>
        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <span className="partner-tag" style={{ background: 'rgba(255,255,255,0.2)' }}>🌱 Agriculture de Précision</span>
          <span className="partner-tag" style={{ background: 'rgba(255,255,255,0.2)' }}>📈 Gestion Simplifiée</span>
        </div>
      </div>

      {/* Côté Formulaire (Droite) */}
      <div className="auth-form-container">
        <div className="auth-form-wrapper">
          <Link to="/" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
            ← Retour au site
          </Link>

          <h1>Bon retour parmi nous</h1>
          <span className="auth-subtitle">
            Pas encore de compte ? <Link to="/inscription">Créer un compte gratuitement</Link>
          </span>

          <form onSubmit={(event) => event.preventDefault()}>
            <div className="form-group">
              <label htmlFor="login-email">Adresse e-mail</label>
              <input
                type="email"
                id="login-email"
                className="input"
                placeholder="nicolas.dupont@ferme.fr"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Mot de passe</label>
              <input
                type="password"
                id="login-password"
                className="input"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="auth-actions">
              <label className="checkbox-group">
                <input type="checkbox" name="remember" />
                Se souvenir de moi
              </label>
              <Link to="/mot-de-passe-oublie" className="forgot-link">Mot de passe oublié ?</Link>
            </div>

            <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>
              Se connecter
            </button>

            <div className="divider">ou</div>

            <button type="button" className="social-btn">
              Continuer avec Google
            </button>
            <button type="button" className="social-btn">
              Continuer avec Facebook
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
