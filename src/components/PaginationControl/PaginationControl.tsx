import "./PaginationControl.css";
import { Box, IconButton } from "@mui/material";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useTheme } from "@mui/material/styles";
import { DEFAULT_PAGE } from "@/global/constants";

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  visiblePages?: number;
  onPageChange: (pageNumber: number) => void;
  isServerSide?: boolean;
  baseUrl?: string;
}

const generatePageNumbers = (
  currentPage: number,
  totalPages: number,
  visiblePages: number
): Array<string | number> => {
  const pages: Array<number | string> = [];

  if (totalPages === DEFAULT_PAGE) {
    return [];
  }

  if (totalPages <= visiblePages) {
    pages.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
  } else {
    let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let end = Math.min(totalPages, start + visiblePages - 1);

    if (end - start < visiblePages - 1) {
      start = Math.max(1, end - visiblePages + 1);
    }

    pages.push(...Array.from({ length: end - start + 1 }, (_, i) => start + i));

    if (start > 1) {
      pages.unshift("...");
      pages.unshift(1);
    }

    if (end < totalPages) {
      pages.push("...");
      pages.push(totalPages);
    }
  }

  return pages;
};

export const PaginationControl = ({
  currentPage,
  totalPages,
  visiblePages = 4,
  onPageChange,
}: TablePaginationProps) => {
  const theme = useTheme();
  const pages = generatePageNumbers(currentPage, totalPages, visiblePages);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }
    onPageChange(pageNumber);
  };

  const handleBackwardClick = () => {
    const prevPage = currentPage - 1;
    handlePageChange(prevPage);
  };

  const handleForwardClick = () => {
    const nextPage = currentPage + 1;
    handlePageChange(nextPage);
  };

  return (
    <Box className={"pagination-container"}>
      <Box className={"pages-selection"}>
        {currentPage > 1 && (
          <IconButton
            className="button-pagination"
            onClick={handleBackwardClick}
          >
            <MdOutlineArrowBackIos size={30} />
          </IconButton>
        )}
        {pages.map((pageNumber, index) =>
          pageNumber === "..." ? (
            <Box key={index} color={theme.palette.secondary.main}>
              {pageNumber}
            </Box>
          ) : (
            <IconButton
              key={index}
              className={`button-pagination ${
                pageNumber === currentPage ? "selected" : "normal"
              }`}
              onClick={() => handlePageChange(+pageNumber)}
            >
              {pageNumber}
            </IconButton>
          )
        )}
        {currentPage < totalPages && (
          <IconButton
            className="button-pagination"
            onClick={handleForwardClick}
          >
            <MdOutlineArrowForwardIos size={30} />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};
