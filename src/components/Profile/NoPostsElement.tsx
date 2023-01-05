import React from 'react';
import { Link } from 'react-router-dom';

export const NoPostsElement = ({ text }: { text: string }) => {
  return (
    <div className="profile__no-posts">
      <img src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png" alt="" />
      <h1 className="profile__no-posts-title">
        Hmm... looks like you haven&apos;t {text} anything yet
      </h1>
      <Link className="back-link" to="/posts">
        Let&apos;s get back to posts
      </Link>
    </div>
  );
};
