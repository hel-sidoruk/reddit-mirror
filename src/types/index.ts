export enum Colors {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  grayF4 = 'grayF4',
  greyF3 = 'greyF3',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
}

export enum EIcons {
  block = 'block',
  warning = 'warning',
  share = 'share',
  save = 'save',
  comments = 'comments',
  close = 'close',
}

export interface PostData {
  author: string;
  title: string;
  previewImage: string;
  id: string;
  avatar: string;
  score: number;
  subreddit: string;
  selftext: string;
  num_comments: number;
}

export interface IComment {
  body: string;
  author: string;
  replies: { data: { children: { data: IComment }[] } } | '';
}
