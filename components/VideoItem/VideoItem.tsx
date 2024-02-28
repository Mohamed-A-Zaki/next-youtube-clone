import { VideoType } from "@/types/video_type";
import icons from "@/utils/icons";
import { Card, Image } from "@mantine/core";
import NextImage from "next/image";
import Link from "next/link";

export default function VideoItem({ id, snippet }: VideoType) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      className="justify-between my-1"
      withBorder
    >
      <Link href={`/video/${id.videoId}`}>
        <Card.Section>
          <Image
            component={NextImage}
            src={snippet.thumbnails.default.url}
            height={160}
            alt="Norway"
            width={160}
          />
        </Card.Section>

        <div className="my-2">{snippet.title.slice(0, 40)}</div>
      </Link>

      <Link
        href={`/channel/${snippet.channelId}`}
        className="text-gray-400 flex gap-2 items-center"
      >
        {snippet.channelTitle}
        <icons.FaCheckCircle className="text-sm" />
      </Link>
    </Card>
  );
}
