# Redux

When we config Redux we import createStore from redux and use createStore by passing(our reduxers) and assign it to store variable, in main file(we we give our to render of root) of our application, mainly index.js we call this function which return store.

```
import { createStore } from 'redux';
import testReducer from '../../features/testarea/testreducer';

export const configueStore = () => {
  const store = createStore(testReducer);
  return store;
};

export default configueStore;

```

we pass store as a prop of Provider component which will be imported from react-redux.

```
const store = configueStore();

    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
```
