import { PostsAction, PostsActionTypes, PostsState } from '../../types/posts';

const initialState: PostsState = {
  posts: [],
  postsById: {},
  loading: false,
  error: null,
};

export const postsReducer = (state: PostsState = initialState, action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return { ...state, loading: true };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
        postsById: action.payload.postsById,
      };
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
