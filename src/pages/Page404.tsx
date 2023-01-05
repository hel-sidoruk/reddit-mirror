import React from 'react';
import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <div className="page-404">
      <img className="page-404__image" src="//www.redditstatic.com/reddit404a.png" alt="404" />
      <h1 className="page-404__title">Page not found</h1>
      <p className="page-404__text">The page you requested does not exist</p>
      <Link className="back-link" to="/posts">
        Back to posts
      </Link>
    </div>
  );
};
