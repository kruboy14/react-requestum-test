import {
  historySearchActionTypes,
  HistorySearchAction,
} from '../../types/historySearch';
import { HistoryState } from '../../types/types';

const initialState: HistoryState = {
  history: [],
};

export const historyReducer = (
  state = initialState,
  action: HistorySearchAction,
): HistoryState => {
  switch (action.type) {
    case historySearchActionTypes.ADD_SEARCH: {
      return {
        ...state,
        history: [action.payload, ...state.history].slice(0, 5),
      };
    }
    default:
      return state;
  }
};
