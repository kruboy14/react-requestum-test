import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { rootReducer } from './reducers';
import {persistrootReducer} from './reducers/'

export const store = createStore(
  persistrootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
