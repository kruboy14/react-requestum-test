import React, { FC } from 'react';
import { IRepo } from '../../types/types';

import './Card.scss';

export const Card: FC<IRepo> = ({
  html_url,
  id,
  description,
  name,
  language,
}: IRepo) => {
  const handleCardClick = (url: string) => {
    window.location.href = url;
  };
  return (
    <div onClick={() => handleCardClick(html_url)} className="card">
      <div className="card-title">
        <h2>{name}</h2>
      </div>
      <div className="card-language">
        <span>Language:</span>&nbsp;
        <b>{language}</b>
      </div>
      <div className="card-description">
        <span>Description:</span>&nbsp;
        <p>{description}</p>
      </div>
    </div>
  );
};
