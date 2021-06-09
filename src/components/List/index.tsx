import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../Card';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Loading from '../../assets/svg/Spin.svg';

import './List.scss';
import classNames from 'classnames';
export const List: FC = () => {
  const { repos, loading } = useTypedSelector((state) => state.repo);
  if (loading) {
    return (
      <section className="list loading">
        <img src={Loading} alt="loading" />
      </section>
    );
  }
  
  return (
    <section className="list">
      {repos && repos.map((repo) => <Card {...repo} />)}
    </section>
  );
};
