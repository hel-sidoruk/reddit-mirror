import React from 'react';
import { RootState } from '../store/reducers';
import { NotAuthorized } from './UI/NotAuthorized';
import { useSelector } from 'react-redux';
import { PostsState } from '../types/posts';
import { ErrorMessage } from './UI/ErrorMessage';
import { useActions } from '../hooks/useActions';
import { BackToTopButton } from './UI/BackToTopButton';
import { Loader } from './UI/Loader';
import { Text } from './UI/Text';
import { Colors } from '../types';
import { useBackToTopBtn } from '../hooks/useBackToTopBtn';
import { CardsElements } from './CardsElements';

export function CardsList() {
  const [isBackBtnShown] = useBackToTopBtn();
  const token = useSelector<RootState, string>((state) => state.token.token);
  const { error, loadingNext, loadCount } = useSelector<RootState, PostsState>(
    (state) => state.posts
  );

  const { fetchNextPosts } = useActions();

  if (error) return <ErrorMessage error={error} />;
  return token ? (
    <>
      <ul className="cardsList">
        <CardsElements />
        {loadingNext && (
          <div className="centered">
            <Text size={28} color={Colors.orange}>
              Loading...
            </Text>
            <Loader />
          </div>
        )}
        {loadCount === 3 && (
          <div className="centered">
            <button
              className="load-btn"
              onClick={(e) => {
                fetchNextPosts();
                (e.target as HTMLButtonElement).classList.add('hidden');
              }}
            >
              Load more
            </button>
          </div>
        )}
      </ul>
      {isBackBtnShown && <BackToTopButton />}
    </>
  ) : (
    <NotAuthorized />
  );
}
