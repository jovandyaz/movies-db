"use client";

import "./Catalogue.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ReactElement, useCallback, useEffect, useState } from "react";
import client from "@/services/client";
import { nowPlayingUri } from "@/services/urls";
import { MovieCard, PaginationControl } from "@/components";
import { MovieData } from "@/global/types";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import toast, { Toaster } from "react-hot-toast";
import { useAppSelector } from "@/store/appHooks";

export const Catalogue = (): ReactElement => {
  const { catalogueTopic } = useAppSelector((state) => state.catalogue);
  const [loading, setLoading] = useState<boolean>(true);
  const [catalogue, setCatalogue] = useState<MovieData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const getCatalogue = useCallback(async () => {
    setLoading(true);
    try {
      const response = await client.get(
        `${catalogueTopic || nowPlayingUri}?page=${page}`
      );
      setCatalogue(response.results);
      setPage(response.page);
      setTotalPages(response.total_pages);
      setLoading(false);
    } catch (error) {
      toast.error("Algo salió mal, intenta de nuevo.");
      setLoading(false);
    }
  }, [catalogueTopic, page]);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    getCatalogue();
  }, [getCatalogue]);

  if (loading)
    return (
      <div className="skeleton-container">
        <SkeletonTheme
          baseColor="#202020"
          highlightColor="#3AE3C3"
          height="16rem"
        >
          <Skeleton count={4} />
        </SkeletonTheme>
      </div>
    );

  return (
    <>
      <section className="catalogue__movies">
        {catalogue.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
      <PaginationControl
        currentPage={page}
        totalPages={totalPages}
        visiblePages={4}
        onPageChange={handlePageChange}
      />
      <Toaster />
    </>
  );
};
