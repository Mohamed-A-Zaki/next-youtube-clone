export interface VideoType {
  kind: string;
  id: ID;
  snippet: Snippet;
}

export interface ID {
  kind: string;
  videoId?: string;
  channelId?: string;
  playlistId?: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}
