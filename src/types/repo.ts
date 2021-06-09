import { IRepo } from './types';

export enum repoActionTypes {
  FETCH_REPO = 'FETCH_REPO',
  FETCH_REPO_SUCCESS = 'FETCH_REPO_SUCCESS',
  FETCH_REPO_ERROR = 'FETCH_REPO_ERROR',
  RESET_REPO = 'RESET_REPO',
}
export interface FetchRepoAction {
  type: repoActionTypes.FETCH_REPO;
}
export interface FetchRepoSuccessAction {
  type: repoActionTypes.FETCH_REPO_SUCCESS;
  payload: IRepo[];
}
export interface FetchRepoErrorAction {
  type: repoActionTypes.FETCH_REPO_ERROR;
  payload: string;
}
export interface ResetRepoAction {
  type: repoActionTypes.RESET_REPO;
}
export type RepoAction =
  | FetchRepoAction
  | FetchRepoSuccessAction
  | FetchRepoErrorAction
  | ResetRepoAction;
