import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';

interface ContentProps {
  children?: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  const { updateToken } = useActions();
  useEffect(() => {
    updateToken();
  }, []);
  return <main className="content">{children}</main>;
}
