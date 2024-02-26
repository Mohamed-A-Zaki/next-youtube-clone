import { VideoType } from "@/types/video_type";
import icons from "@/utils/icons";
import { Card, Image } from "@mantine/core";
import NextImage from "next/image";
import Link from "next/link";

export default function ChannelItem({ id, snippet }: VideoType) {
  return (
    <Card>
      <>
        <Image
          component={NextImage}
          src={snippet.thumbnails.default.url}
          height={160}
          alt="Norway"
          width={160}
          style={{ borderRadius: "50%" }}
        />
      </>

      <Link
        href={`channel/${snippet.channelId}`}
        className="text-gray-400 flex gap-2 items-center my-2 justify-center"
      >
        {snippet.channelTitle}
        <icons.FaCheckCircle className="text-sm" />
      </Link>
    </Card>
  );
}
