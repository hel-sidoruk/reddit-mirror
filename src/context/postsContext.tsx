import React, { createContext } from 'react';
import { usePostsData } from '../hooks/usePostsData';
import { PostData } from '../types';

export const postsContext = createContext<PostData[]>([]);

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const [data] = usePostsData();

  return <postsContext.Provider value={data}>{children}</postsContext.Provider>;
}
