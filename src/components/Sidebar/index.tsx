import React, { FC } from 'react';
import './Sidebar.scss';

export const Sidebar: FC = () => {
  return (
    <section className="sidebar">
      <input className='sidebar-search-input' type="text"  placeholder='Enter repo name'/>
      <div className='sidebar-search-title'><p>Search history:</p></div>
      <ul className="sidebar-history-search">
        <li className='sidebar-history-search-item'>1</li>
        <li className='sidebar-history-search-item'>2</li>
        <li className='sidebar-history-search-item'>3</li>
        <li className='sidebar-history-search-item'>4</li>
      </ul>
    </section>
  );
};
