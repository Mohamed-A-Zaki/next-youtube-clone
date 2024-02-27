import { videosAtom } from "@/atoms/videos_atom";
import { SimpleGrid } from "@mantine/core";
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
    <SimpleGrid cols={{ base: 1, xs: 2, md: 3, lg: 5 }}>
      {videos?.map((video) => {
        if (video.id.videoId) {
          return <VideoItem key={video.id.videoId} {...video} />;
        }

        if (video.id.channelId) {
          return <ChannelItem key={video.id.channelId} {...video} />;
        }
      })}
    </SimpleGrid>
  );
}
