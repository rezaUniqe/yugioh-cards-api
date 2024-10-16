import { cardService } from "@/services/card-api/card-api-impl";
import { cache } from "react";
import { PaginationService } from "@/services/pagination-service/pagination-service";
import CardsGrid from "@/components/cards-grid";
import Sidebar from "@/components/sidebar";
import TopBar from "@/components/top-bar";
import PaginationComponent from "@/components/client-pagination";

async function fetchAndPaginateCards(perPage: number, currentPage: number) {
  const cachedCardsAPI = cache(cardService.getAllCards);
  const cards = await cachedCardsAPI({ perPage });
  const paginationService = new PaginationService<any>(perPage); // Create a pagination service instance
  paginationService.setItems(cards);
  return paginationService.getPaginatedItems(currentPage);
}

export default async function Home({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const perPage = 12;
  const currentPage = searchParams.page ?? 1; // Example current page
  const paginatedCards = await fetchAndPaginateCards(perPage, currentPage);

  return (
    <div className={"flex flex-col w-full"}>
      <TopBar />
      <div className="flex w-full gap-3">
        <Sidebar />
        <CardsGrid paginatedCards={paginatedCards} />
      </div>
    </div>
  );
}
