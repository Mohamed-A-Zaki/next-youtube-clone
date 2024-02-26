import { videosAtom } from "@/atoms/videos_atom";
import icons from "@/utils/icons";
import { Card, Image, SimpleGrid, Title } from "@mantine/core";
import NextImage from "next/image";
import Link from "next/link";
import VideoItem from "../VideoItem";
import ChannelItem from "../ChannelItem";

export default function VideoList() {
  const videos = videosAtom.use("data");
  const error = videosAtom.use("error");
  const isLoading = videosAtom.use("isLoading");

  if (isLoading) {
    return <div className="text-center text-lg">loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-700">error...</div>;
  }

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
      {videos?.map((video) => {
        return video.id.videoId ? (
          <VideoItem key={video.id.videoId} {...video} />
        ) : (
          <ChannelItem key={video.snippet.channelId} {...video} />
        );
      })}
    </SimpleGrid>
  );
}
