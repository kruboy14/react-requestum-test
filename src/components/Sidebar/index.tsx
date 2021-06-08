import React, { FC, useCallback, useEffect, useState } from 'react';
import './Sidebar.scss';
import { debounce } from 'lodash';
import { IAxiosRepo, IRepo } from '../../types/types';
import axios from '../../core/axios';

export const Sidebar: FC = () => {
  const [inputSearchValue, setInputSearchValue] = useState<string>('');

  const fetchRepo = async (value: string) => {
    const {
      data: { items },
    } = await axios.get<IAxiosRepo>(
      `/search/repositories?q=${value}&access_token=${process.env.REACT_APP_API_GITHUB}`,
    );
    const repoData = items.map((item) => ({
      id: item.id,
      url: item.html_url,
      name: item.name,

      description: item.description,
      language: item.language,
    }));
    console.log(repoData);
  };

  const debouncedGetResponse = useCallback(
    debounce((value) => fetchRepo(value), 300),
    [],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearchValue(e.target.value);

    debouncedGetResponse(e.target.value);
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
