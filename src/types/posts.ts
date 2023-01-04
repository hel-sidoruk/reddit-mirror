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
  video: string | null;
}
export interface PostsById {
  [key: string]: PostData;
}
export interface PostsState {
  posts: PostData[];
  postsById: PostsById;
  after: string;
  loading: boolean;
  loadingNext: boolean;
  option: string;
  error: null | string;
  loadCount: number;
}

export enum PostsActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
  FETCH_NEXT_POSTS = 'FETCH_NEXT_POSTS',
  FETCH_NEXT_POSTS_SUCCESS = 'FETCH_NEXT_POSTS_SUCCESS',
  FETCH_NEXT_POSTS_ERROR = 'FETCH_NEXT_POSTS_ERROR',
}
interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: { posts: PostData[]; postsById: PostsById; after: string; option: string };
}
interface FetchPostsErrorAction {
  type: PostsActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}
interface FetchNextPostsAction {
  type: PostsActionTypes.FETCH_NEXT_POSTS;
}
interface FetchNextPostsSuccessAction {
  type: PostsActionTypes.FETCH_NEXT_POSTS_SUCCESS;
  payload: { posts: PostData[]; postsById: PostsById; after: string; loadCount: number };
}
interface FetchNextPostsErrorAction {
  type: PostsActionTypes.FETCH_NEXT_POSTS_ERROR;
  payload: string;
}

export type PostsAction =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction
  | FetchNextPostsAction
  | FetchNextPostsSuccessAction
  | FetchNextPostsErrorAction;
