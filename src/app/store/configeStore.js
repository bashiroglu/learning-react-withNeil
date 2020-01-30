import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from '../../app/reducers/rootreducer';

export const configueStore = () => {
  const store = createStore(rootReducer, devToolsEnhancer());
  return store;
};

export default configueStore;
