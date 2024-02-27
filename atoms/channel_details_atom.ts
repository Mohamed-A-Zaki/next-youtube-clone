import { fetchingAtom } from "@mongez/react-atom";
import { GetChannelDetailsResponseType } from "@/types/get_channel_details_response_type";

export const channelDetailsAtom =
  fetchingAtom<GetChannelDetailsResponseType>("channelDetails");
