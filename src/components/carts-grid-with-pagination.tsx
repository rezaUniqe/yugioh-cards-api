"use client";
import React, { Suspense, useState } from "react";
import PaginationComponent from "@/components/client-pagination";
import { useRouter, useSearchParams } from "next/navigation";
import CardsGridContainer from "@/app/_containers/cards-grid-container";

const CartsGridWithPagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialPage = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  return (
    <div
      className={
        "overflow-y-auto fixed top-[64px] bottom-0 right-0 w-[calc(100%-280px)]"
      }
    >
      <Suspense fallback={<h1>loading...</h1>}>
        <CardsGridContainer
          setTotalPages={setTotalPages}
          currentPage={currentPage}
        />
      </Suspense>
      <PaginationComponent
        onPageChange={(page) => {
          router.push(`/?page=${currentPage}`);

          setCurrentPage(page);
        }}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default CartsGridWithPagination;
