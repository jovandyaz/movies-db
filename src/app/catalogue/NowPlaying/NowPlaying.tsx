"use client";

import { useCallback, useEffect, useState } from "react";
import client from "@/services/client";
import { nowPlayingUri } from "@/services/urls";
import { MovieCard } from "@/components";
import { MovieData } from "@/global/types";

export const NowPlaying = () => {
  const [catalogue, setCatalogue] = useState<MovieData[]>([]);

  const getCatalogue = useCallback(async () => {
    const response = await client.get(nowPlayingUri);
    setCatalogue(response.results);
  }, []);

  useEffect(() => {
    getCatalogue();
  }, [getCatalogue]);

  return (
    <section className="catalogue__movies">
      {catalogue.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};
