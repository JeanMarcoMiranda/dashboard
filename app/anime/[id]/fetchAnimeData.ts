import { fetchData } from "../../utils/api";
import { AnimeData } from "../../types/animeTypes";

export const fetchSelectedAnimeData = async (
  animeId: string
): Promise<AnimeData> => {
  const selectedAnimeInfo = await fetchData(`anime/${animeId}`);
  return selectedAnimeInfo.data;
};
