export enum historySearchActionTypes {
  ADD_SEARCH = 'ADD_SEARCH',
}
export interface HistoryAddAction {
  type: historySearchActionTypes.ADD_SEARCH;
  payload: string;
}

export type HistorySearchAction = HistoryAddAction;
