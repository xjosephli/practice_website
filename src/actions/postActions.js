import {FETCH_POSTS, NEW_POST} from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://practice-database-246f0.firebaseio.com/')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    )
    .catch(error => 
        console.log(error));
};