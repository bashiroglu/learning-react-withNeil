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

- when we want to get access redux state from our component we can use method called connect this is the HO function which take our component and on the way add our state as a prop there and then we can get access to it as a normal props. in order to enable connect to add what we want want we use function (which will be given connect function as a parametr) mapstatetoprops.

```
const MapStateToProps = state => ({
  data: state.test.data
});
```

- we can also update our redux state from component. For that we need to use connect and give dispatchtoprops object as a second argument of connect.

```
const MapDispatchToProps = {
  increment,
  decrement
};
```

these two functions come from action file which there they defined.

```
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './testConstants';

export const increment = () => {
  return {
    type: INCREMENT_COUNTER
  };
};
export const decrement = () => {
  return {
    type: DECREMENT_COUNTER
  };
};
```

as it is seen they don't have any functionality in here but, in reducer they will be checked and they will updated based on their type

```
switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, data: state.data + 1 };
    case DECREMENT_COUNTER:
      return { ...state, data: state.data - 1 };

    default:
      return state;
  }
```

- in mapstatetoprops function, if we want to get access to own props of component we can use ownprops parametr as a second parametr

```
const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
};
```
