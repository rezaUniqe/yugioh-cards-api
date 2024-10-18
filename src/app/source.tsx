import { cache } from "react";
import { cardService } from "@/services/card-api/card-api-impl";
import { PaginationService } from "@/services/pagination-service/pagination-service";
import { Card } from "@/models/card";

export async function fetchAndPaginateCards(
  perPage: number,
  currentPage: number,
) {
  const cachedCardsAPI = cache(cardService.getAllCards);
  const cards = await cachedCardsAPI({ perPage });
  const paginationService = new PaginationService<Card>(perPage); // Create a pagination service instance
  paginationService.setItems(cards);
  return {
    data: paginationService.getPaginatedItems(currentPage),
    pagination: {
      page: currentPage,
      total: paginationService.getTotalPages(),
    },
  };
}
