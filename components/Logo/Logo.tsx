import Link from "next/link";
import NextImage from "next/image";
import { Image } from "@mantine/core";
import images from "@/utils/images";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        component={NextImage}
        src={images.logo}
        alt="My image"
        width={30}
        height={30}
      />
    </Link>
  );
}
