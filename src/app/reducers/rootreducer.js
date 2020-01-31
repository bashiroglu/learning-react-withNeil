import { combineReducers } from 'redux';
import testReducer from '../../features/testarea/testreducer';
import { reducer as FormReducer } from 'redux-form';
import eventReducer from '../../features/event/eventReducer';

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer
});

export default rootReducer;
