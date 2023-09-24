import React, { useState } from 'react';
import dataJson from '../data/db.json';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

function Blog(props) {
  const [data, setData] = useState(dataJson.blog);

  return (
    <div className="container pt-2 pb-5 pt-3">
      <article className="content mb-3">
        {data.map((item) => (
          <div key={item.id} className='post-content'>
            <p className="title">{item.title}</p>
            <p className="date">{item.date}</p>
            <p className="post">{item.description}</p>
            {item.github && (
              <Link to={item.github} className="link">
                gitHub repository ❯❯❯
              </Link>
            )}
            {item.url && (
              <Link to={item.url} className="link">
                Link zur Projekt Webseite  
              </Link>
            )}
          </div>
        ))}
      </article>
    </div>
  );
}
export default Blog;
