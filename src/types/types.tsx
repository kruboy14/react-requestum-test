export interface IRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

export interface IAxiosRepo {
  total_count: number;
  incomplete_results: boolean;
  items: IRepo[];
}

export interface RepoState {
  repos: IRepo[];
  loading: boolean;
  error: null | string;
}
