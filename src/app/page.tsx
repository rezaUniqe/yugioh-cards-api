import React from "react";
import TopBar from "@/components/top-bar";
import Sidebar from "@/components/sidebar";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchAndPaginateCards } from "@/app/source";
import CartsGridWithPagination from "@/components/carts-grid-with-pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const perPage = 12;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["cards", searchParams.page],
    queryFn: async () => {
      return await fetchAndPaginateCards(perPage, searchParams.page ?? 1);
    },
  });

  return (
    <div className={"flex flex-col w-full"}>
      <TopBar />
      <div className="flex w-full gap-3">
        <Sidebar />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CartsGridWithPagination />
        </HydrationBoundary>
      </div>
    </div>
  );
}
