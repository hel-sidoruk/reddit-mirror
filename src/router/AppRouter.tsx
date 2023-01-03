import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PostModal } from '../components/PostModal';
import { Home } from '../pages/Home';
import { Page404 } from '../pages/Page404';
import { Redirect } from './Redirect';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Redirect to="/posts" />} />
      <Route path="/posts" element={<Home />}>
        <Route path="/posts/:id" element={<PostModal />} />
      </Route>
      <Route path="/auth" element={<Redirect to="/posts" auth />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
