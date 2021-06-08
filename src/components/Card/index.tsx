import React, { FC } from 'react';

import './Card.scss';
export const Card: FC = () => {
  return (
    <div className="card">
      <div className="card-title"><h2>accordion</h2></div>
      <div className="card-language">
        <span>Language:</span>&nbsp;
        <b>Java</b>
      </div>
      <div className="card-description">
        <span>Description:</span>&nbsp;
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dicta
          commodi! Reprehenderit modi tempora consequuntur non minima,
          voluptatibus voluptas repellendus!
        </p>
      </div>
    </div>
  );
};
