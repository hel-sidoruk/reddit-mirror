export interface PostData {
  author: string;
  title: string;
  id: string;
  avatar: string;
  score: number;
  selftext: string;
  num_comments: number;
  url: string;
  created: string;
}

export interface PostsState {
  posts: PostData[];
  loading: boolean;
  error: null | string;
}

export enum PostsActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}
interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: PostData[];
}
interface FetchPostsErrorAction {
  type: PostsActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

export type PostsAction = FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction;
