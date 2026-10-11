import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';
import { formatDate } from '../utils/date';

function Writing() {
  return (
    <section className="section" id="writing">
      <p className="section-label reveal">Writing</p>
      <h2 className="section-title reveal reveal-delay-1">
        Recent writing
      </h2>

      <div className="writing-preview-list">
        {POSTS.map((post, i) => (
          <Link
            key={post.slug}
            to={`/writing/${post.slug}`}
            className={`writing-preview-card reveal reveal-delay-${Math.min(i + 2, 4)}`}
          >
            <time className="writing-post-date" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <h3 className="writing-post-title">{post.title}</h3>
            <p className="writing-post-desc">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Writing;
