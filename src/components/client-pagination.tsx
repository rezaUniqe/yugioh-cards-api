"use client";

import { Pagination } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type CardsWithPaginationProps = {
  totalPages: number;
};

const PaginationComponent = ({ totalPages }: CardsWithPaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialPage = Number(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage);

  // Update the URL whenever the page changes
  useEffect(() => {
    if (currentPage !== initialPage) {
      router.push(`/?page=${currentPage}`);
    }
  }, [currentPage, initialPage, router]);

  return (
    <div className="mt-6 flex justify-center">
      <Pagination
        total={totalPages}
        initialPage={currentPage}
        onChange={(page) => {
          setCurrentPage(page); // Update current page state
        }}
      />
    </div>
  );
};

export default PaginationComponent;
