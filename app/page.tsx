import Sidebar from "@/components/Sidebar";
import { Stack } from "@mantine/core";
import VideoList from "@/components/VideoList";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <Stack align="start" className="md:!flex-row">
      <Sidebar />

      <div className="flex-1 p-2">
        <PageTitle />
        <VideoList videos={[]} />
      </div>
    </Stack>
  );
}
