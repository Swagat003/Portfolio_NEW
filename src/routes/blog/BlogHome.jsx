
import React, { useEffect, useState } from "react";
import "./BlogHome.scss";
import { Link, useLocation } from "react-router-dom";

function formatDate(d){
  if(!d) return ''
  const dt = new Date(d)
  if(isNaN(dt)) return d
  return dt.toLocaleString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}

function BlogHome() {
  const [blogs, setBlogs] = useState([]);
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const q = (params.get('q') || '').toLowerCase()

  useEffect(() => {
    fetch("/blogs/index.json")
      .then((res) => {
        if (!res.ok) throw new Error("No blog index");
        return res.json();
      })
      .then((list) => setBlogs(list))
      .catch((err) => {
        console.warn('[BlogHome] failed to load /blogs/index.json', err);
        setBlogs([]);
      });
  }, []);

  const filtered = blogs.filter(b => b.title.toLowerCase().includes(q) || (b.description || '').toLowerCase().includes(q))

  return (
    <section id="blog-home" className="blog-home">
      <div className="blog-list">
        {filtered.length === 0 ? (
          <p className="no-blogs">No blogs found.</p>
        ) : (
          filtered.map(blog => (
            <Link to={blog.id} relative="path" key={blog.id} className="blog-card">
              <div className="card-body">
                <div>
                  <h2 className="card-title">{blog.title}</h2>
                  <p className="card-desc">{blog.description}</p>
                </div>

                <div className="card-meta">
                  <div className="meta-left">
                    <time className="card-date">{formatDate(blog.date)}</time>
                    <div className="card-tags">{(blog.tags || []).map(t => <span className="tag" key={t}>{t}</span>)}</div>
                  </div>
                </div>
              </div>

              {blog.image && <div className="card-image"><img src={blog.image} alt={blog.title} /></div>}
            </Link>
          ))
        )}
      </div>
    </section>
  );
}

export default BlogHome;
