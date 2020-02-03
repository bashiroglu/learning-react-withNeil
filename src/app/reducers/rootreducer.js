import { combineReducers } from 'redux';
import testReducer from '../../features/testarea/testReducer';
import { reducer as FormReducer } from 'redux-form';
import eventReducer from '../../features/event/eventReducer';
import modalReducer from '../../features/models/modalReducer';

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalReducer
});

export default rootReducer;
