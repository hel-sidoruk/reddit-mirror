import { Dispatch } from 'redux';
import axios from 'axios';
import { PostData, PostsAction, PostsActionTypes, PostsById } from '../../types/posts';
import { isImage } from '../../utils/isImage';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ThunkActionType } from '../../types';

interface PostApi {
  author: string;
  title: string;
  id: string;
  sr_detail: { header_img: null | string };
  score: number;
  selftext: string;
  num_comments: number;
  url: string;
  created: number;
}
dayjs.extend(relativeTime);

export const fetchPosts = (option = 'best'): ThunkActionType => {
  return async (dispatch: Dispatch<PostsAction>, getState) => {
    const { token } = getState().token;
    if (token) {
      try {
        dispatch({ type: PostsActionTypes.FETCH_POSTS });
        const { data } = await axios.get(`https://oauth.reddit.com/${option}?sr_detail=true`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        const posts = data.data.children;
        const postData: PostData[] = posts.map(({ data }: { data: PostApi }) => ({
          author: data.author,
          title: data.title,
          id: data.id,
          avatar: data.sr_detail.header_img ? data.sr_detail.header_img : '',
          score: data.score,
          selftext: data.selftext,
          num_comments: data.num_comments,
          url: isImage(data.url) ? data.url : '',
          created: `Posted ${dayjs(data.created * 1000).fromNow()}`,
        }));
        const postsById: PostsById = {};
        postData.forEach((post) => {
          postsById[post.id] = post;
        });
        dispatch({
          type: PostsActionTypes.FETCH_POSTS_SUCCESS,
          payload: { posts: postData, postsById },
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
