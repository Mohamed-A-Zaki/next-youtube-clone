import { VideoType } from "@/types/video_type";
import { fetchingAtom } from "@mongez/react-atom";

export const videosAtom = fetchingAtom<VideoType[]>("videos");
