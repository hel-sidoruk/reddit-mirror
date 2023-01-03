import React, { useEffect } from 'react';
import { EIcons } from '../types';
import { CommentForm } from './CommentForm';
import { Text } from './UI/Text';
import { IconButton } from './UI/IconButton';
import { CommentsBlock } from './CommentsBlock';
import { PostData } from '../types/posts';
import { DefaultIcon } from './Icons';
import { useActions } from '../hooks/useActions';

export const Post = ({ post, postId }: { post: PostData; postId: string }) => {
  const { fetchComments } = useActions();
  useEffect(() => {
    fetchComments(postId);
  }, []);

  if (!post) return <div></div>;
  return (
    <div className="post" onClick={(e) => e.stopPropagation()}>
      <div className="post__content">
        <div className="metaData">
          <div className="userLink">
            {post.avatar ? (
              <img src={post.avatar} className="avatar" alt="avatar" />
            ) : (
              <DefaultIcon fill="#CC6633" className="avatar" />
            )}
            <a href="#user-url" className="username">
              {post.author}
            </a>
          </div>
          <span className="createdAt">{post.created}</span>
        </div>
        <Text As="h1" size={28}>
          {post.title}
        </Text>
        <Text As="p" size={20}>
          {post.selftext}
        </Text>
        {post.url && <img className="post__image" src={post.url} alt="Post image" />}
        <div className="post__btns">
          <IconButton icon={EIcons.comments}>{post.num_comments} comments</IconButton>
          <IconButton icon={EIcons.share}>Share</IconButton>
          <IconButton icon={EIcons.block}>Hide</IconButton>
          <IconButton icon={EIcons.save}>Save</IconButton>
          <IconButton icon={EIcons.warning}>Report</IconButton>
        </div>
        <CommentForm />
        <CommentsBlock />
      </div>
    </div>
  );
};
