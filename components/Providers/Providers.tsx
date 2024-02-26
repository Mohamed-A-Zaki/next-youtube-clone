"use client";

import { MantineProvider } from "@mantine/core";
import { AtomProvider } from "@mongez/react-atom";

export type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  return (
    <MantineProvider defaultColorScheme="dark">
      <AtomProvider register={[]}>{children}</AtomProvider>
    </MantineProvider>
  );
}
