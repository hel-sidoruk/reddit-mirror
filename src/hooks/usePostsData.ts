import { useContext, useEffect, useState } from 'react';
import { tokenContext } from '../context/tokenContext';
import axios from 'axios';
import { PostData } from '../types';

interface PostApi {
  author: string;
  title: string;
  thumbnail: string;
  id: string;
  sr_detail: { header_img: null | string };
  score: number;
  subreddit: string;
  selftext: string;
}

export function usePostsData() {
  const [data, setData] = useState<PostData[]>([]);
  const token = useContext(tokenContext);

  useEffect(() => {
    if (token) {
      axios
        .get('https://oauth.reddit.com/best.json?sr_detail=true', {
          headers: {
            Authorization: `bearer ${token}`,
          },
        })
        .then(({ data }) => {
          const posts = data.data.children;
          const postData = posts.map(({ data }: { data: PostApi }) => {
            const { author, title, thumbnail, id, sr_detail, score, subreddit, selftext } = data;
            return {
              author,
              title,
              id,
              previewImage: thumbnail !== ('self' || 'default' || 'nsfw') ? thumbnail : '',
              avatar: sr_detail.header_img ? sr_detail.header_img : '',
              score,
              subreddit,
              selftext,
            };
          });
          setData(postData);
        })
        .catch(console.log);
    }
  }, [token]);

  return [data];
}
