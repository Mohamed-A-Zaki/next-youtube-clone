import icons from "@/utils/icons";
import NextImage from "next/image";
import { Image, Stack } from "@mantine/core";
import { channelDetailsAtom } from "@/atoms/channel_details_atom";

export default function ChannelDetailsSection() {
  const data = channelDetailsAtom.use("data");

  return (
    <>
      <div
        className="h-60"
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,44,0.9697128851540616) 0%, rgba(0,212,255,1) 100%)",
        }}
      ></div>

      <div className="-translate-y-20">
        <Image
          component={NextImage}
          src={data?.items[0].snippet.thumbnails.default.url}
          height={160}
          width={160}
          alt="Norway"
          className="!w-[160px] h-[160px] !rounded-full m-auto block"
        />

        <Stack align="center" gap={1}>
          <div className="flex items-center gap-2 justify-center mt-2 font-semibold text-lg">
            {data?.items[0].snippet.title}
            <icons.FaCheckCircle className="text-sm" />
          </div>

          <div>{data?.items[0].statistics.subscriberCount} Subscribers</div>
          <div>{data?.items[0].statistics.videoCount} Videos</div>
        </Stack>
      </div>
    </>
  );
}
