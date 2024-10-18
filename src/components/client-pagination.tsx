"use client";

import { Pagination } from "@nextui-org/react";

type CardsWithPaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const PaginationComponent = ({
  totalPages,
  currentPage,
  onPageChange,
}: CardsWithPaginationProps) => {
  return (
    <div className="mt-6 flex justify-center">
      <Pagination
        total={totalPages}
        initialPage={currentPage}
        onChange={(page) => {
          onPageChange(page);
        }}
      />
    </div>
  );
};

export default PaginationComponent;
