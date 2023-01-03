import React from 'react';
import { CardsList } from '../components/CardsList';
import { Content } from '../components/Content';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Content>
        <CardsList />
        <Outlet />
      </Content>
    </>
  );
};
