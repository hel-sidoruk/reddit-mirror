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
  num_comments: number;
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
            return {
              author: data.author,
              title: data.title,
              id: data.id,
              previewImage:
                data.thumbnail !== ('self' || 'default' || 'nsfw') ? data.thumbnail : '',
              avatar: data.sr_detail.header_img ? data.sr_detail.header_img : '',
              score: data.score,
              subreddit: data.subreddit,
              selftext: data.selftext,
              num_comments: data.num_comments,
            };
          });
          setData(postData);
        })
        .catch(console.log);
    }
  }, [token]);

  return [data];
}
