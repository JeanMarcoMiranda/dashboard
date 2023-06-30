import React from "react";
import { fetchSelectedAnimeData } from "./fetchAnimeData";

export default async function AnimeDescriptionLayout({
  params,
  children,
}: {
  params: { id: string };
  children: React.ReactNode;
}) {
  const { id } = params;
  const selectedAnimeData = await fetchSelectedAnimeData(id);

  return (
    <article className="w-full bg-[#476CA6]">
      <div className="container mx-auto">
        {/* Head */}
        <div className="w-full bg-[#8F89C6] text-white text-3xl font-bold py-4 pl-8 flex flex-col border-b-2 border-[#252B4D]">
          {selectedAnimeData.title}
          <small className="text-xl">{selectedAnimeData.title_english}</small>
        </div>
        {/* Body */}
        <div className="grid grid-cols-12">
          <div className="col-span-3 bg-red-200 border-r-2 border-[#252B4D]">
            <figure>
              <img src={selectedAnimeData.images.jpg.large_image_url} alt="Anime-image" className="w-full"/>
            </figure>
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </div>
    </article>
  );
}
