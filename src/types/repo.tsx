export enum repoActionTypes {
  FETCH_REPO = 'FETCH_REPO',
  FETCH_REPO_SUCCESS = 'FETCH_REPO_SUCCESS',
  FETCH_REPO_ERROR = 'FETCH_REPO_ERROR',
}
export interface FetchRepoAction {
  type: repoActionTypes.FETCH_REPO;
}
export interface FetchRepoSuccessAction {
  type: repoActionTypes.FETCH_REPO_SUCCESS;
  payload: any[];
}
export interface FetchRepoErrorAction {
  type: repoActionTypes.FETCH_REPO_ERROR;
  payload: string;
}
export type RepoAction =
  | FetchRepoAction
  | FetchRepoSuccessAction
  | FetchRepoErrorAction;
