"use client";

import Sidebar from "@/components/Sidebar";
import { Stack } from "@mantine/core";
import VideoList from "@/components/VideoList";
import PageTitle from "@/components/PageTitle";
import { useEffect } from "react";
import { getVideosService } from "@/services/get_videos_service";
import { selectedCategoryAtom } from "@/atoms/selected_category_atom";

export default function Home() {
  const selectedCategory = selectedCategoryAtom.useValue();

  useEffect(() => {
    return () => selectedCategoryAtom.silentReset();
  }, []);

  useEffect(() => {
    getVideosService(selectedCategory);
  }, [selectedCategory]);

  return (
    <Stack align="start" className="md:!flex-row">
      <Sidebar />

      <div className="flex-1 p-2 w-full">
        <PageTitle query={selectedCategory} />
        <VideoList count={5} />
      </div>
    </Stack>
  );
}
