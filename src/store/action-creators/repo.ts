import { IAxiosRepo, IRepo } from '../../types/types';
import axios from '../../core/axios';
import { RepoAction, repoActionTypes } from '../../types/repo';
import { Dispatch } from 'react';

export const fetchRepo =
  (value: string) => async (dispatch: Dispatch<RepoAction>) => {
    try {
      dispatch({ type: repoActionTypes.FETCH_REPO });
      const {
        data: { items },
      } = await axios.get<IAxiosRepo>(
        `/search/repositories?q=${value}`,
        {headers: {
          'Authorization': `token ${process.env.REACT_APP_API_GITHUB}`
        }}
      );
      const repoData: IRepo[] = items.map((item) => ({
        id: item.id,
        html_url: item.html_url,
        name: item.name,
        description: item.description,
        language: item.language,
      }));
      if (!repoData.length) {
        return dispatch({
          type: repoActionTypes.FETCH_REPO_SUCCESS,
          payload: null,
        });
      }
      dispatch({ type: repoActionTypes.FETCH_REPO_SUCCESS, payload: repoData });
    } catch (error) {
      dispatch({
        type: repoActionTypes.FETCH_REPO_ERROR,
        payload: 'Error happend',
      });
    }
  };

export const nullRepo = () => (dispatch: Dispatch<RepoAction>) => {
  dispatch({ type: repoActionTypes.RESET_REPO });
};
