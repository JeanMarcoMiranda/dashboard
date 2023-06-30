import { fetchData } from "../utils/api";
import { AnimeData, AnimeResponse } from "../types/animeTypes";
import Link from "next/link";

interface AnimeI {
  mal_id: number;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
      small_image_url: string;
    };
  };
  title: string;
  synopsis: string;
}

// const fetchAnimes = async () => {
//   const animeListRes = await fetch("https://api.jikan.moe/v4/anime");
//   const animeList = await animeListRes.json();
//   return animeList.data as AnimeI[];
// };

const fetchTopAnimes = async () => {
  const animeListRes = await fetchData("top/anime");
  return animeListRes.data as AnimeData[];
};

export default async function Dashboard() {
  const popularAnime = await fetchTopAnimes();
  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <div className="container mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Popular Anime</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 ">
          {popularAnime.map((anime: AnimeData) => (
            <Link href="/anime/[id]" as={`/anime/${anime.mal_id}`}>
              <div
                key={anime.mal_id}
                className="relative w-full h-64 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                />
                <div className="absolute inset-0">
                  <div className="w-full h-full bg-gradient-to-t from-black/90 from-5% via-transparent to-transparent/5 to-[100%]">
                    <h2 className="absolute bottom-2 w-full text-lg font-semibold truncate px-2 z-10">
                      {anime.title}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default async function Dashboard() {
//   const animes = await fetchTopAnimes();
//   return (
//     <div className="flex flex-wrap justify-center">
//       {animes.map((anime) => (
//         <div
//           key={anime.mal_id}
//           className="w-64 h-96 mx-4 my-8 bg-white rounded-lg shadow-lg"
//         >
//           <img
//             src={anime.images.jpg.large_image_url}
//             alt={anime.title}
//             className="object-cover w-full h-48 rounded-t-lg"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-bold">{anime.title}</h2>
//             <p className="text-gray-600 overflow-hidden overflow-ellipsis whitespace-normal">
//               {anime.synopsis.length > 100
//                 ? `${anime.synopsis.substring(0, 100)}...`
//                 : anime.synopsis}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
