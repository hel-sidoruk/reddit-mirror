import { Dispatch } from 'redux';
import axios from 'axios';
import { PostData, PostsAction, PostsActionTypes } from '../../types/posts';
import { ThunkActionType } from '../../types';
import { getPost } from '../../utils/getPost';
import { getPostsById } from '../../utils/getPostsById';

const URL = 'https://oauth.reddit.com';

export const fetchPosts = (option = 'best'): ThunkActionType => {
  return async (dispatch: Dispatch<PostsAction>, getState) => {
    const { token } = getState().token;
    if (token) {
      try {
        dispatch({ type: PostsActionTypes.FETCH_POSTS });
        const { data } = await axios.get(`${URL}/${option}?sr_detail=true`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        const postsData: PostData[] = data.data.children.map(getPost);
        const postsById = getPostsById(postsData);
        dispatch({
          type: PostsActionTypes.FETCH_POSTS_SUCCESS,
          payload: { posts: postsData, postsById, after: data.data.after, option },
        });
      } catch (err) {
        dispatch({
          type: PostsActionTypes.FETCH_POSTS_ERROR,
          payload: `Ooops...\nThere is an error:\n${err}`,
        });
      }
    }
  };
};

export const fetchNextPosts = (): ThunkActionType => {
  return async (dispatch: Dispatch<PostsAction>, getState) => {
    const { token } = getState().token;
    const { after, posts, postsById, option, loadCount } = getState().posts;
    if (token && after && posts.length) {
      try {
        dispatch({ type: PostsActionTypes.FETCH_NEXT_POSTS });
        const { data } = await axios.get(`${URL}/${option}?sr_detail=true`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
          params: {
            after: after,
          },
        });
        const nextPosts = data.data.children;
        const postData: PostData[] = nextPosts.map(getPost);
        const postsByIdNext = getPostsById(postData);
        dispatch({
          type: PostsActionTypes.FETCH_NEXT_POSTS_SUCCESS,
          payload: {
            posts: [...posts, ...postData],
            postsById: { ...postsById, ...postsByIdNext },
            after: data.data.after,
            loadCount: loadCount < 3 ? loadCount + 1 : 1,
          },
        });
      } catch (err) {
        dispatch({
          type: PostsActionTypes.FETCH_NEXT_POSTS_ERROR,
          payload: `Ooops...\nThere is an error:\n${err}`,
        });
      }
    }
  };
};
