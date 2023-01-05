import React from 'react';
import { Outlet } from 'react-router-dom';
import { Content } from '../components/Content';
import { ProfileNavigation } from '../components/Profile/ProfileNavigation';

export const Profile = () => {
  return (
    <>
      <ProfileNavigation />
      <Content>
        <section className="profile">
          <Outlet />
        </section>
      </Content>
    </>
  );
};
