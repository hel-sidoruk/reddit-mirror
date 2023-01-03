import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';

export const Auth = () => {
  const { updateToken } = useActions();
  const navigate = useNavigate();
  useEffect(() => {
    updateToken();
    navigate('/');
  }, []);
  return <div></div>;
};
