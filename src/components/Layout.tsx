import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { updateToken } = useActions();
  useEffect(() => {
    updateToken();
  }, []);
  return <div className="layout">{children}</div>;
}
