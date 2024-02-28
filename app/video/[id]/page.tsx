"use client";

import { videoDetailsAtom } from "@/atoms/video_details_atom";
import { videosAtom } from "@/atoms/videos_atom";
import VideoItem from "@/components/VideoItem";
import VideoList from "@/components/VideoList";
import { getRelatedVideosService } from "@/services/get_related_videos_service";
import { getVideoDetailsService } from "@/services/get_video_details_service";
import { Card, Group } from "@mantine/core";
import { useEffect } from "react";
import ReactPlayer from "react-player";

type VideoDetailsProps = {
  params: {
    id: string;
  };
};

export default function VideoDetails({ params: { id } }: VideoDetailsProps) {
  const videoDetails = videoDetailsAtom.use("data");
  const videos = videosAtom.use("data");

  useEffect(() => {
    /**
     * Get video details
     */
    getVideoDetailsService(id);

    /***
     * Get related videos
     */
    getRelatedVideosService(id);
  }, [id]);

  return (
    <Group className="p-3 !flex-col md:!flex-row" align="start">
      <Card withBorder className="flex-1 md:!w-full">
        <ReactPlayer
          controls
          width={"100%"}
          height={"500px"}
          url={`https://www.youtube.com/watch?v=${id}`}
        />
        <div className="text-lg font-bold p-2">
          {videoDetails?.items[0].snippet.title}
        </div>

        <Group justify="end">
          <div>{videoDetails?.items[0].statistics.viewCount} views</div>
          <div>{videoDetails?.items[0].statistics.likeCount} likes</div>
        </Group>

        <Card withBorder className="mt-3">
          {videoDetails?.items[0].snippet.description}
        </Card>
      </Card>

      <Card withBorder>
        {/* {videos?.map((video) => {
          return <VideoItem key={video.id.videoId} {...video} />;
        })} */}
        <VideoList count={1} />
      </Card>
    </Group>
  );
}
