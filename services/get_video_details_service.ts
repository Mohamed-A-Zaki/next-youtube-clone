import { GetVideoDetailsResponseType } from "./../types/get_video_details_response_type";
import { videoDetailsAtom } from "@/atoms/video_details_atom";
import { base_url } from "@/utils/base_url";

export const getVideoDetailsService = async (id: string) => {
  try {
    /**
     * start loading
     */
    videoDetailsAtom.startLoading();

    /**
     * fetch data
     */
    const url = `videos?part=contentDetails,snippet,statistics&id=${id}`;
    const { data } = await base_url.get<GetVideoDetailsResponseType>(url, {
      headers: {
        "X-RapidAPI-Key": "96d002a252mshcf2e872702d0839p1e97edjsn34f7c269f9fd",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    });

    /***
     * stop loading and set data
     */
    videoDetailsAtom.success(data);
  } catch (error) {
    /**
     * stop loading and set error
     */
    videoDetailsAtom.failed(error);
  }
};
