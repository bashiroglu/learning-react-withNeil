import { createStore } from 'redux';
import rootReducer from '../../app/reducers/rootreducer';

export const configueStore = () => {
  const store = createStore(rootReducer);
  return store;
};

export default configueStore;
