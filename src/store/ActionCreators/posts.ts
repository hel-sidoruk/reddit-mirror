import { Dispatch } from 'redux';
import axios from 'axios';
import { PostsAction, PostsActionTypes } from '../../types/posts';
import { isImage } from '../../utils/isImage';

interface PostApi {
  author: string;
  title: string;
  id: string;
  sr_detail: { header_img: null | string };
  score: number;
  selftext: string;
  num_comments: number;
  url: string;
}

export const fetchPosts = (token: string, option = 'best') => {
  return async (dispatch: Dispatch<PostsAction>) => {
    if (token) {
      try {
        dispatch({ type: PostsActionTypes.FETCH_POSTS });
        const { data } = await axios.get(`https://oauth.reddit.com/${option}?sr_detail=true`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        const posts = data.data.children;
        const postData = posts.map(({ data }: { data: PostApi }) => ({
          author: data.author,
          title: data.title,
          id: data.id,
          avatar: data.sr_detail.header_img ? data.sr_detail.header_img : '',
          score: data.score,
          selftext: data.selftext,
          num_comments: data.num_comments,
          url: isImage(data.url) ? data.url : '',
        }));
        dispatch({
          type: PostsActionTypes.FETCH_POSTS_SUCCESS,
          payload: postData,
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
