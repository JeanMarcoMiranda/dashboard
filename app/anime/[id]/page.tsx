import React from "react";
import { fetchSelectedAnimeData } from "./fetchAnimeData";

interface IParamSlug {
  params: {
    id: string;
  };
}

export default async function AnimeDescriptionPage({ params }: IParamSlug) {
  const { id } = params;
  const selectedAnimeData = await fetchSelectedAnimeData(id);

  return <div></div>;
}
