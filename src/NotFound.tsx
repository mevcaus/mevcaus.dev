import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
      </div>
      <div className="not-found-content">
        <p className="not-found-code">404</p>
        <h1 className="not-found-title">
          Well, this is{' '}
          <span className="not-found-accent">awkward.</span>
        </h1>
        <p className="not-found-message">
          This page doesn't exist. Maybe it's on a branch I forgot to merge.
        </p>
        <Link to="/" className="not-found-cta">
          ← Back to Safety
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
