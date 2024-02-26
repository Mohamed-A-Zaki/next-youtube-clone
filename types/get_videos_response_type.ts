import { VideoType } from "./video_type";

export interface GetVideosResponseType {
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: VideoType[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
