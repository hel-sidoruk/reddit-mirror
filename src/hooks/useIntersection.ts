import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { PostsState } from '../types/posts';
import { useActions } from './useActions';

export default function useIntersection() {
  const bottomOfList = useRef<HTMLLIElement>(null);

  const { fetchNextPosts } = useActions();
  const { loadCount, after } = useSelector<RootState, PostsState>((state) => state.posts);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([target]) => target.isIntersecting && loadCount < 3 && fetchNextPosts(),
      {
        rootMargin: '100px',
      }
    );
    const bottom = bottomOfList.current;
    if (bottom) observer.observe(bottom);
    return () => {
      if (bottom) observer.unobserve(bottom);
    };
  }, [bottomOfList.current, after]);

  return [bottomOfList];
}
