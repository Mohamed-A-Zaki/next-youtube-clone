"use client";

import { useEffect } from "react";
import { Container } from "@mantine/core";

import VideoList from "@/components/VideoList";
import ChannelDetailsSection from "@/components/ChannelDetailsSection";

import { getChannelVideosService } from "@/services/get_channel_videos_service";
import { getChannelDetailsService } from "@/services/get_channel_details_service";

type ChannelDetailsProps = {
  params: {
    id: string;
  };
};

export default function ChannelDetails({
  params: { id },
}: ChannelDetailsProps) {
  useEffect(() => {
    /**
     * Get channel details
     */
    getChannelDetailsService(id);

    /**
     * Get channel videos
     */
    getChannelVideosService(id);
  }, [id]);

  return (
    <div>
      <ChannelDetailsSection />

      <Container size={"lg"} className="mb-8">
        <VideoList count={4} />
      </Container>
    </div>
  );
}
