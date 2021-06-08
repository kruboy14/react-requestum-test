import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Card } from '../Card';

import './List.scss';
export const List: FC = () => {
  const state = useTypedSelector((state) => state.repo);
  return (
    <section className="list">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </section>
  );
};
