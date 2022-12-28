import React, { createContext } from 'react';
import { useUserData } from '../hooks/useUserData';

interface UserContextData {
  name?: string;
  avatar?: string;
}

export const userContext = createContext<UserContextData>({});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [data] = useUserData();

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}
