import { combineReducers } from 'redux';
import * as navigation from '../containers/Navigation';

const rootReducer = combineReducers({
  navReducer: navigation.reducer
})

export default rootReducer
