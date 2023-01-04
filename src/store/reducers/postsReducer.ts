import { PostsAction, PostsActionTypes, PostsState } from '../../types/posts';

const initialState: PostsState = {
  posts: [],
  postsById: {},
  after: '',
  option: '',
  loading: false,
  loadingNext: false,
  loadCount: 1,
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
        after: action.payload.after,
        option: action.payload.option,
      };
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PostsActionTypes.FETCH_NEXT_POSTS:
      return { ...state, loadingNext: true };
    case PostsActionTypes.FETCH_NEXT_POSTS_SUCCESS:
      return {
        ...state,
        loadingNext: false,
        posts: action.payload.posts,
        postsById: action.payload.postsById,
        after: action.payload.after,
        loadCount: action.payload.loadCount,
      };
    case PostsActionTypes.FETCH_NEXT_POSTS_ERROR:
      return { ...state, loadingNext: false, error: action.payload };
    default:
      return state;
  }
};
