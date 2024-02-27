import icons from "@/utils/icons";
import NextImage from "next/image";
import { Image, Stack } from "@mantine/core";
import { channelDetailsAtom } from "@/atoms/channel_details_atom";

export default function ChannelDetailsSection() {
  const data = channelDetailsAtom.use("data");

  return (
    <div>
      <div className="h-48 bg-slate-500"></div>

      <Image
        component={NextImage}
        src={data?.items[0].snippet.thumbnails.default.url}
        height={160}
        width={160}
        alt="Norway"
        className="!w-[160px] h-[160px] !rounded-full m-auto block -translate-y-1/2"
      />

      <Stack align="center" gap={1} className="-translate-y-20">
        <div className="flex items-center gap-2 justify-center mt-2">
          {data?.items[0].snippet.title}
          <icons.FaCheckCircle className="text-sm" />
        </div>

        <div>{data?.items[0].statistics.subscriberCount} Subscribe</div>
        <div>{data?.items[0].statistics.videoCount} Videos</div>
      </Stack>
    </div>
  );
}
