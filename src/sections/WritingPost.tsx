import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { POSTS } from '../data/posts';
import type { PostBlock } from '../data/posts';

function WritingPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Mevludin Causevic`;
    }
    return () => { document.title = 'Mevludin Causevic — Software Engineer'; };
  }, [post]);

  if (!post) {
    return <Navigate to="/writing" replace />;
  }

  return (
    <div className="writing-page">
      <div className="writing-page-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
      </div>

      <div className="writing-toolbar no-print">
        <Link to="/writing" className="writing-toolbar-back">&larr; Back to Writing</Link>
      </div>

      <article className="writing-paper writing-article">
        <header className="writing-article-header">
          <h1 className="writing-article-title">{post.title}</h1>
          <div className="writing-article-meta">
            <time>{formatDate(post.date)}</time>
            <div className="writing-article-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="writing-tag">{tag}</span>
              ))}
            </div>
          </div>
        </header>

        <div className="writing-article-body">
          {post.body.map((block, i) => renderBlock(block, i))}
        </div>
      </article>
    </div>
  );
}

function renderBlock(block: PostBlock, index: number) {
  if (block.type === 'paragraph') {
    return <p key={index}>{block.content}</p>;
  }

  // so using dangerouslySetInnerHTML for the Prism output is safe here.
  return (
    <div key={index} className="writing-code-wrapper">
      <div className="writing-code-header">
        <span className="writing-code-dot"></span>
        <span className="writing-code-dot"></span>
        <span className="writing-code-dot"></span>
        <span className="writing-code-lang">{block.filename || block.language}</span>
      </div>
      <div className="writing-code-shiki" dangerouslySetInnerHTML={{ __html: block.content }} />
    </div>
  );
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default WritingPost;
