"use client";

import { selectedCategoryAtom } from "@/atoms/selected_category_atom";
import PageTitle from "@/components/PageTitle";
import VideoList from "@/components/VideoList";
import { getVideosService } from "@/services/get_videos_service";
import { Container } from "@mantine/core";
import { useEffect } from "react";

export default function Search() {
  const selectedCategory = selectedCategoryAtom.useValue();

  useEffect(() => {
    getVideosService(selectedCategory);
  }, [selectedCategory]);

  return (
    <Container size={"lg"} className="my-5">
      <PageTitle query={selectedCategory} />
      <VideoList count={4} />
    </Container>
  );
}
