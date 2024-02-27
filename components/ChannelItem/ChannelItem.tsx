import { VideoType } from "@/types/video_type";
import icons from "@/utils/icons";
import { Card, Image } from "@mantine/core";
import NextImage from "next/image";
import Link from "next/link";

export default function ChannelItem({ id, snippet }: VideoType) {
  return (
    <Link href={`channel/${snippet.channelId}`} className="text-gray-400">
      <Image
        component={NextImage}
        src={snippet.thumbnails.default.url}
        height={160}
        alt="Norway"
        width={160}
        style={{ borderRadius: "50%" }}
      />

      <div className="flex items-center gap-2 justify-center mt-2 font-semibold text-white text-lg">
        {snippet.channelTitle}
        <icons.FaCheckCircle className="text-sm" />
      </div>
    </Link>
  );
}
