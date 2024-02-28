import { fetchingAtom } from "@mongez/react-atom";
import { GetVideoDetailsResponseType } from "@/types/get_video_details_response_type";

export const videoDetailsAtom =
  fetchingAtom<GetVideoDetailsResponseType>("videoDetails");
