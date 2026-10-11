import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';
import { formatDate } from '../utils/date';

function WritingList() {
  useEffect(() => {
    document.title = 'Writing | Mevludin Causevic';
    return () => { document.title = 'Mevludin Causevic | Software Engineer'; };
  }, []);

  return (
    <div className="writing-page">
      <div className="writing-page-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
      </div>

      <div className="writing-toolbar no-print">
        <Link to="/" className="writing-toolbar-back">&larr; Back to Portfolio</Link>
      </div>

      <div className="writing-paper">
        <header className="writing-header">
          <h1 className="writing-page-title">Writing</h1>
        </header>

        <div className="writing-post-list">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              to={`/writing/${post.slug}`}
              className="writing-post-card"
            >
              <time className="writing-post-date">{formatDate(post.date)}</time>
              <h2 className="writing-post-title">{post.title}</h2>
              <p className="writing-post-desc">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WritingList;
