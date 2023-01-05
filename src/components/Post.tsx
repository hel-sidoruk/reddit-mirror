import React, { useEffect, useState } from 'react';
import { EIcons } from '../types';
import { CommentForm } from './CommentForm';
import { IconButton } from './UI/IconButton';
import { CommentsBlock } from './CommentsBlock';
import { PostData } from '../types/posts';
import { DefaultIcon } from './Icons';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { SavedPostsState } from '../store/reducers/savedPostsReducer';

export const Post = ({ post, postId }: { post: PostData; postId: string }) => {
  const { fetchComments, savePost, unsavePost } = useActions();
  const [isSaved, setIsSaved] = useState(false);
  const { savedPostIds } = useSelector<RootState, SavedPostsState>((state) => state.savedPosts);
  useEffect(() => {
    fetchComments(postId);
    if (post && savedPostIds.includes(post.id)) setIsSaved(true);
  }, [post]);

  if (!post) return <></>;

  return (
    <div className="post" onClick={(e) => e.stopPropagation()}>
      <div className="post__content">
        <div className="metaData">
          <div className="userLink">
            {post.avatar ? (
              <img src={post.avatar} className="avatar" alt="avatar" />
            ) : (
              <DefaultIcon
                fill={`${post ? '#CC6633' : '#ddd'}`}
                className={`avatar ${post ? '' : 'skelet'}`}
              />
            )}
            <a href="#" className="username">
              {post.author}
            </a>
          </div>
          <span className="createdAt">{post.created}</span>
        </div>
        <h1 className="post__title">{post.title}</h1>
        <p className="post__text">{post.selftext}</p>
        {post.url && (
          <div className="post__asset-box">
            <img className="post__asset" src={post.url} alt="Post image" />
          </div>
        )}
        {post.video && (
          <div className="post__asset-box">
            <video className="post__asset" src={post.video} controls />
          </div>
        )}
        <div className="post__btns">
          <IconButton icon={EIcons.comments}>{post.num_comments} comments</IconButton>
          <IconButton icon={EIcons.share}>Share</IconButton>
          <IconButton icon={EIcons.block}>Hide</IconButton>
          <IconButton
            icon={EIcons.save}
            handleClick={() => {
              isSaved ? unsavePost(post.id) : savePost(post.id);
              setIsSaved(!isSaved);
            }}
          >
            {isSaved ? 'Unsave' : 'Save'}
          </IconButton>
          <IconButton icon={EIcons.warning}>Report</IconButton>
        </div>
        <CommentForm />
        <CommentsBlock />
      </div>
    </div>
  );
};
