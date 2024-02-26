"use client";

import { Title } from "@mantine/core";
import { selectedCategoryAtom } from "@/atoms/selected_category_atom";

export default function PageTitle() {
  const selectedCategory = selectedCategoryAtom.useValue();

  return (
    <Title order={2} className="!mb-2">
      <span className="text-red-700">{selectedCategory}</span> Videos
    </Title>
  );
}
