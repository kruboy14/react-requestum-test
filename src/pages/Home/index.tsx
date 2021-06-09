import React from 'react';
import { List } from '../../components/List';
import { Sidebar } from '../../components/Sidebar';

import './Home.scss';
export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <List />
    </div>
  );
};
