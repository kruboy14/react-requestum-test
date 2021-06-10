import React, { FC, useCallback, useEffect, useState } from 'react';
import './Sidebar.scss';
import { debounce } from 'lodash';
import { fetchRepo, nullRepo } from '../../store/action-creators/repo';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Sidebar: FC = () => {
  const [inputSearchValue, setInputSearchValue] = useState<string>('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const { fetchRepo, nullRepo, addHistorySearch } = useActions();
  const history = useTypedSelector((state) => state.historySearch.history);
  useEffect(() => {


    setSearchHistory(history);
  }, [history]);
  const debouncefetchRepo = async (value: string) => {
    await fetchRepo(value);
    addHistorySearch(value);
    setInputSearchValue('');
  };

  const debouncedGetResponse = useCallback(
    debounce((value) => debouncefetchRepo(value), 500),
    [],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearchValue(e.target.value);

    if (!e.target.value) {
      nullRepo();
    } else {
      debouncedGetResponse(e.target.value);
    }
  };
  const hanldeSearchHisory = (e: React.MouseEvent<HTMLLIElement>) => {
    const prevSearch = e.currentTarget.innerHTML;
    setInputSearchValue(prevSearch);

    debouncefetchRepo(prevSearch);
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
        {searchHistory.map((item, id) => {
          return (
            <li
              onClick={hanldeSearchHisory}
              key={id}
              className="sidebar-history-search-item">
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
