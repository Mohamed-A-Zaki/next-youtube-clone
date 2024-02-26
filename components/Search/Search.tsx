"use client";

import icons from "@/utils/icons";
import { FormEvent } from "react";
import { ActionIcon, TextInput } from "@mantine/core";

export default function Search() {
  /***
   * handle submit
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <TextInput
        rightSectionPointerEvents="none"
        placeholder="Search"
        className="w-80"
      />

      <ActionIcon
        type="submit"
        variant="transparent"
        className="!absolute top-1/2 right-1 -translate-y-1/2"
      >
        <icons.IoIosSearch className="w-6 h-6" />
      </ActionIcon>
    </form>
  );
}
