import { videosAtom } from "@/atoms/videos_atom";
import { GetVideosResponseType } from "@/types/get_videos_response_type";
import { base_url } from "@/utils/base_url";

export const getVideosService = async (selectedCategory: string) => {
  try {
    /***
     * start loading
     */
    videosAtom.startLoading();

    /**
     * fetch data
     */
    const url = `/search?q=${selectedCategory}&part=snippet,id&maxResults=50`;
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
    /***
     * stop loading and set error
     */
    videosAtom.failed(error);
  }
};
