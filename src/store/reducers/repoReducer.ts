import { RepoAction, repoActionTypes } from '../../types/repo';
import { RepoState } from '../../types/types';

const initialState: RepoState = {
  repos: [],
  loading: false,
  error: null,
};



export const repoReducer = (
  state = initialState,
  action: RepoAction,
): RepoState => {
  switch (action.type) {
    case repoActionTypes.FETCH_REPO: {
      return { ...state, loading: true, error: null };
    }
    case repoActionTypes.FETCH_REPO_SUCCESS: {
      return { ...state, loading: false, repos: action.payload };
    }
    case repoActionTypes.FETCH_REPO_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    case repoActionTypes.RESET_REPO: {
      return { ...state, loading: false, error: null, repos: [] };
    }
    default:
      return state;
  }
};
