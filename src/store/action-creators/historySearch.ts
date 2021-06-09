import {
  HistorySearchAction,
  historySearchActionTypes,
} from '../../types/historySearch';

import { Dispatch } from 'react';

export const addHistorySearch =
  (value: string) => async (dispatch: Dispatch<HistorySearchAction>) => {
    dispatch({ type: historySearchActionTypes.ADD_SEARCH, payload: value });
  };
