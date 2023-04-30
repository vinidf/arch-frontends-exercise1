import { NavLink } from "react-router-dom";

function BlogSection({ posts }) {
  return (
    <section id="blog-section-anchor" className="blog-section">
      <h2>Últimas do blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <NavLink to={post.url}>
              <h3>{post.title}</h3>
            </NavLink>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
      <NavLink to="/">Ver tudo</NavLink>
    </section>
  );
}

export default BlogSection;
