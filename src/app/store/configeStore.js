import { createStore } from 'redux';
import testReducer from '../../features/testarea/testreducer';

export const configueStore = () => {
  const store = createStore(testReducer);
  return store;
};

export default configueStore;
