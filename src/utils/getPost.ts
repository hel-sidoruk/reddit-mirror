import { isImage } from './isImage';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { PostData } from '../types/posts';

dayjs.extend(relativeTime);

interface PostApi {
  author: string;
  title: string;
  id: string;
  sr_detail: { header_img: null | string };
  score: number;
  selftext: string;
  num_comments: number;
  url: string;
  created: number;
  secure_media: { reddit_video: { fallback_url: string } };
}

export const getPost = ({ data }: { data: PostApi }): PostData => ({
  author: data.author,
  title: data.title,
  id: data.id,
  avatar: data.sr_detail.header_img ? data.sr_detail.header_img : '',
  score: data.score,
  selftext: data.selftext,
  num_comments: data.num_comments,
  url: isImage(data.url) ? data.url : '',
  created: `Posted ${dayjs(data.created * 1000).fromNow()}`,
  video: data.secure_media?.reddit_video?.fallback_url?.split('?')[0] || null,
});
