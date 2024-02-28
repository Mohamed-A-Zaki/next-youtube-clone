import { GetVideosResponseType } from "@/types/get_videos_response_type";
import { videosAtom } from "@/atoms/videos_atom";
import { base_url } from "@/utils/base_url";

export const getRelatedVideosService = async (id: string) => {
  try {
    /**
     * start loading
     */
    videosAtom.startLoading();

    /**
     * fetch data
     */
    const url = `search?relatedToVideoId=${id}&part=id,snippet&type=video&maxResults=50`;
    const { data } = await base_url.get<GetVideosResponseType>(url, {
      headers: {
        "X-RapidAPI-Key": "96d002a252mshcf2e872702d0839p1e97edjsn34f7c269f9fd",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    });

    /***
     * stop loading and set data
     */
    videosAtom.success(data.items);
  } catch (error) {
    /**
     * stop loading and set error
     */
    videosAtom.failed(error);
  }
};
