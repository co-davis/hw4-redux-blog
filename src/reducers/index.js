import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import authReducer from './auth-reducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

export default rootReducer;
