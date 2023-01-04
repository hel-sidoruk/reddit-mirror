import React, { useEffect } from 'react';
import { EIcons } from '../types';
import { CommentForm } from './CommentForm';
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

  return (
    <div className="post" onClick={(e) => e.stopPropagation()}>
      <div className="post__content">
        <div className="metaData">
          <div className="userLink">
            {post && post.avatar ? (
              <img src={post.avatar} className="avatar" alt="avatar" />
            ) : (
              <DefaultIcon
                fill={`${post ? '#CC6633' : '#ddd'}`}
                className={`avatar ${post ? '' : 'skelet'}`}
              />
            )}
            <a href="#" className="username">
              {post && post.author}
            </a>
          </div>
          <span className={`createdAt ${!post ? 'skelet' : ''}`}>{post ? post.created : ' '}</span>
        </div>
        <h1 className={`post__title ${!post ? 'skelet' : ''}`}>{post ? post.title : ' '}</h1>
        <p className={`post__text ${!post ? 'skelet' : ''}`}>{post ? post.selftext : ' '}</p>
        {post && post.url && (
          <div className="post__asset-box">
            <img className="post__asset" src={post.url} alt="Post image" />
          </div>
        )}
        {post && post.video && (
          <div className="post__asset-box">
            <video className="post__asset" src={post.video} controls />
          </div>
        )}
        <div className="post__btns">
          <IconButton icon={EIcons.comments}>{post && post.num_comments} comments</IconButton>
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
