import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';

import storage from 'redux-persist/lib/storage';
import { historyReducer } from './historyReducer';
import { repoReducer } from './repoReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['repo'],
};

export const rootReducer = combineReducers({
  repo: repoReducer,
  historySearch: historyReducer,
});

export const persistrootReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
