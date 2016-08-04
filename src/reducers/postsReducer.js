import { ActionTypes } from '../actions';

const postsReducer = (state = {
  all: [],
  post: null,
}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { all: action.payload, post: state.post };
    case ActionTypes.FETCH_POST:
      return { all: state.all, post: action.payload };
    default:
      return state;
  }
};


export default postsReducer;
