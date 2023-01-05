import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { RootState } from '../../store/reducers';
import { KarmaState } from '../../store/reducers/karmaReducer';
import { IconDown, IconUp } from '../Icons';

export function KarmaCounter({ score, postID }: { score: number; postID: string }) {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownVoted, setIsDownVoted] = useState(false);
  const { upvotePost, downvotePost } = useActions();
  const { upvotedIds, downvotedIds } = useSelector<RootState, KarmaState>((state) => state.karma);

  useEffect(() => {
    if (upvotedIds.includes(postID)) setIsUpvoted(true);
    if (downvotedIds.includes(postID)) setIsDownVoted(true);
  }, []);

  const upvote = () => {
    isDownVoted && setIsDownVoted(false);
    setIsUpvoted(!isUpvoted);
    upvotePost(postID);
  };
  const downvote = () => {
    isUpvoted && setIsUpvoted(false);
    setIsDownVoted(!isDownVoted);
    downvotePost(postID);
  };

  return (
    <div className="karmaCounter">
      <button onClick={upvote} className={`up ${isUpvoted ? 'upvoted' : ''}`}>
        <IconUp />
      </button>
      <span className={`karmaValue ${isDownVoted ? 'downvoted' : ''}`}>{score}</span>
      <button onClick={downvote} className={`down ${isDownVoted ? 'downvoted' : ''}`}>
        <IconDown />
      </button>
    </div>
  );
}
