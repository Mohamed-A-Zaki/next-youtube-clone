import { Group } from "@mantine/core";

import Logo from "../Logo";
import Search from "../Search";

export default function Navbar() {
  return (
    <Group justify="space-between" className="p-3 border-b border-gray-700">
      <Logo />
      <Search />
    </Group>
  );
}
