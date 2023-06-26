"use client";
//import { useEffect, useState } from "react";
//import { fetchAnimeData } from "../utils/api";

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

const fetchAnimes = async () => {
  const animeListRes = await fetch("https://api.jikan.moe/v4/anime");
  const animeList = await animeListRes.json();
  return animeList.data as AnimeI[];
};

export default async function Dashboard() {
  /*const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await fetchAnimeData("anime");
        setAnimes(response.data);
      } catch (error) {
        console.error("Error al obtener los datos de anime:", error);
      }
    };

    fetchAnimes();
  }, []);*/
  const animes = await fetchAnimes();
  return (
    <div className="flex flex-wrap justify-center">
      {animes.map((anime) => (
        <div
          key={anime.mal_id}
          className="w-64 h-96 mx-4 my-8 bg-white rounded-lg shadow-lg"
        >
          <img
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
            className="object-cover w-full h-48 rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{anime.title}</h2>
            <p className="text-gray-600 overflow-hidden overflow-ellipsis whitespace-normal">
              {anime.synopsis.length > 100
                ? `${anime.synopsis.substring(0, 100)}...`
                : anime.synopsis}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
