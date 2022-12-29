import React, { createContext, useState } from 'react';

interface CommentContext {
  value: string;
  onChange: (value: string) => void;
}
export const commentContext = createContext<CommentContext>({ value: '', onChange: () => {} });
export function CommentContextProvider({ children }: { children: React.ReactNode }) {
  const [comment, setComment] = useState('');
  return (
    <commentContext.Provider
      value={{
        value: comment,
        onChange: setComment,
      }}
    >
      {children}
    </commentContext.Provider>
  );
}
