import React, { FC, useCallback, useEffect, useState } from 'react';
import './Sidebar.scss';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { fetchRepo, nullRepo } from '../../store/action-creators/repo';

export const Sidebar: FC = () => {
  const [inputSearchValue, setInputSearchValue] = useState<string>('');
  const dispatch = useDispatch();

  const debouncefetchRepo = async (value: string) => {
    dispatch(fetchRepo(value));
  };

  const debouncedGetResponse = useCallback(
    debounce((value) => debouncefetchRepo(value), 300),
    [],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearchValue(e.target.value);

    if (!e.target.value) {
      dispatch(nullRepo());
    } else {
      debouncedGetResponse(e.target.value);
    }
  };
  return (
    <section className="sidebar">
      <input
        value={inputSearchValue}
        onChange={handleInputChange}
        className="sidebar-search-input"
        type="text"
        placeholder="Enter repo name"
      />
      <div className="sidebar-search-title">
        <p>Search history:</p>
      </div>
      <ul className="sidebar-history-search">
        <li className="sidebar-history-search-item">1</li>
        <li className="sidebar-history-search-item">2</li>
        <li className="sidebar-history-search-item">3</li>
        <li className="sidebar-history-search-item">4</li>
      </ul>
    </section>
  );
};
