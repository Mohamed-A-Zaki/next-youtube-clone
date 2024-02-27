import { channelDetailsAtom } from "@/atoms/channel_details_atom";
import { GetChannelDetailsResponseType } from "@/types/get_channel_details_response_type";
import { base_url } from "@/utils/base_url";

export const getChannelDetailsService = async (channelId: string) => {
  try {
    /***
     * start loading
     */
    channelDetailsAtom.startLoading();

    /**
     * fetch data
     */
    const url = `channels?part=snippet,statistics&id=${channelId}`;
    const { data } = await base_url.get<GetChannelDetailsResponseType>(url, {
      headers: {
        "X-RapidAPI-Key": "96d002a252mshcf2e872702d0839p1e97edjsn34f7c269f9fd",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    });

    /**
     * stop loading and set data
     */
    channelDetailsAtom.success(data);
  } catch (error) {
    /**
     * stop loading and set error
     */
    channelDetailsAtom.failed(error);
  }
};
