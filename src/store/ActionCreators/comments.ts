import { Dispatch } from 'redux';
import axios from 'axios';
import { CommentsAction, CommentsActionTypes, IComment } from '../../types/comments';

export const fetchComments = (id: string) => {
  return async (dispatch: Dispatch<CommentsAction>) => {
    try {
      dispatch({ type: CommentsActionTypes.FETCH_COMMENTS });
      const { data } = await axios.get(`http://api.reddit.com/comments/${id}`);
      const comments = data[1].data.children;
      const commentsData = comments.map(({ data }: { data: IComment }) => ({
        body: data.body,
        author: data.author,
        replies: data.replies,
        created: data.created,
      }));
      dispatch({
        type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
        payload: commentsData,
      });
    } catch (err) {
      dispatch({
        type: CommentsActionTypes.FETCH_COMMENTS_ERROR,
        payload: `Ooops...\nThere is an error:\n${err}`,
      });
    }
  };
};
