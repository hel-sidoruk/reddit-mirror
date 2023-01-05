import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PostModal } from '../components/PostModal';
import { ViewedPosts } from '../components/Profile/ViewedPosts';
import { SavedPosts } from '../components/Profile/SavedPosts';
import { Home } from '../pages/Home';
import { Page404 } from '../pages/Page404';
import { Profile } from '../pages/Profile';
import { Redirect } from './Redirect';
import { ProfilePosts } from '../components/Profile/ProfilePosts';
import { UpvotedPosts } from '../components/Profile/UpvotedPosts';
import { DownvotedPosts } from '../components/Profile/DownvotedPosts';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Redirect to="/posts" />} />
      <Route path="/posts" element={<Home />}>
        <Route path="/posts/:id" element={<PostModal />} />
      </Route>
      <Route path="/auth" element={<Redirect to="/posts" auth />} />
      <Route path="/profile" element={<Profile />}>
        <Route path="/profile/history" element={<ViewedPosts />} />
        <Route path="/profile/saved" element={<SavedPosts />} />
        <Route path="/profile/upvoted" element={<UpvotedPosts />} />
        <Route path="/profile/downvoted" element={<DownvotedPosts />} />
        <Route path="/profile/:page" element={<ProfilePosts />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
