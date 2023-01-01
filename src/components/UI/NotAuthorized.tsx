import React from 'react';

export function NotAuthorized() {
  return (
    <div className="authorize">
      <h1 className="authorize__title">You are not authorized</h1>
      <p className="authorize__descr">Please, sign in to see all posts</p>
      <img
        className="authorize__image"
        src="https://www.howtogeek.com/wp-content/uploads/2019/12/Reddit-Karma-Header.jpg?height=200p&trim=2,2,2,2"
        alt="Reddit"
      />
    </div>
  );
}
