import React, { createContext } from 'react';
import { usePostsData } from '../hooks/usePostsData';

interface PostsContextData {
  author: string;
  title: string;
  previewImage: string;
  id: string;
  avatar: string;
  score: number;
}
export const postsContext = createContext<PostsContextData[]>([]);

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const [data] = usePostsData();

  return <postsContext.Provider value={data}>{children}</postsContext.Provider>;
}
