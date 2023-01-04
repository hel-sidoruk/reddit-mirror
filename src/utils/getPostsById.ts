import { PostData, PostsById } from '../types/posts';

export function getPostsById(postData: PostData[]): PostsById {
  const postsById: PostsById = {};
  postData.forEach((post) => {
    postsById[post.id] = post;
  });
  return postsById;
}
