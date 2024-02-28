import { Title } from "@mantine/core";

export default function PageTitle({ query }: { query: string }) {
  return (
    <Title order={2} className="!mb-5">
      <span className="text-red-700">{query}</span> Videos
    </Title>
  );
}
