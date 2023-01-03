import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';

export const Redirect = ({ to, auth }: { to: string; auth?: boolean }) => {
  const { updateToken } = useActions();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) updateToken();
    navigate(to);
  }, []);
  return <div></div>;
};
