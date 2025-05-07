import { useState } from "react";

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  initialPage?: number;
};

export const Pagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  initialPage = 1,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center mt-4 space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Previous
      </button>

      <span className="px-3 py-1">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Next
      </button>
    </div>
  );
};
