import axios from 'axios';
import { browserHistory } from 'react-router';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
};

const ROOT_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = '?key=c_davis';

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then(response => {
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
      console.log(response.data);
    }).catch(error => {
      console.log('Can\'t fetch posts');
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: 'FETCH_POST', payload: response.data });
      console.log(response.data);
    }).catch(error => {
      console.log('Can\'t fetch post');
    });
  };
}


export function createPost(post) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, post).then(response => {
      dispatch({ type: 'CREATE_POST', payload: response.data });
      browserHistory.push('/');
      console.log(response.data);
    }).catch(error => {
      console.log('Can\'t create post. Please try again.');
    });
  };
}

export function updatePost(id, post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post).then(response => {
      dispatch({ type: 'UPDATE_POST', payload: response.data });
      console.log(response.data);
    }).catch(error => {
      console.log('Can\'t update post. Please try again.');
    });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(response => {
      dispatch({ type: 'DELETE_POST', payload: response.data });
      browserHistory.push('/');
      console.log(response.data);
    }).catch(error => {
      console.log('Can\'t delete post. Please try again.');
    });
  };
}
