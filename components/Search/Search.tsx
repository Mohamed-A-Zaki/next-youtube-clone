"use client";

import icons from "@/utils/icons";
import { FormEvent, useState } from "react";
import { ActionIcon, TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";
import { selectedCategoryAtom } from "@/atoms/selected_category_atom";

export default function Search() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  /***
   * handle submit
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    /**
     * prevent default
     */
    e.preventDefault();

    /***
     * update selected category
     */
    selectedCategoryAtom.update(query);

    /**
     * push to search
     */
    router.push(`/search/${query}`);

    /***
     * reset query
     */
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <TextInput
        rightSectionPointerEvents="none"
        placeholder="Search"
        className="w-80"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ActionIcon
        component="button"
        type="submit"
        variant="transparent"
        className="!absolute top-1/2 right-1 -translate-y-1/2"
      >
        <icons.IoIosSearch className="w-6 h-6" />
      </ActionIcon>
    </form>
  );
}
