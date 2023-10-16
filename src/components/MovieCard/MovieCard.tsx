"use client";

import "./MovieCard.css";
import { MovieData } from "@/global/types";
import { Card, Typography } from "@mui/material";
import Image from "next/image";
import clsx from "clsx";
import { imageBaseUrl } from "@/services/urls";

interface MovieCardProps {
  movie: MovieData;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { title, overview, poster_path } = movie;

  return (
    <Card className="movie-card" elevation={0}>
      <div className="movie-card__details">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{overview.slice(0, 200)}</Typography>
        <Typography variant="subtitle2">{movie.vote_average}</Typography>
      </div>
      <Image
        className={clsx("movie-card__poster")}
        src={`${imageBaseUrl}${poster_path}`}
        width={253}
        height={367}
        alt={title}
      />
    </Card>
  );
};
