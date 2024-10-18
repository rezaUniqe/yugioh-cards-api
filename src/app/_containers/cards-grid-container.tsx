import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchAndPaginateCards } from "@/app/source";
import CardsGrid from "@/components/cards-grid";
import { useEffect } from "react";

interface Props {
  currentPage: number;
  setTotalPages: (totalPages: number) => void;
}

const CardsGridContainer = ({ currentPage, setTotalPages }: Props) => {
  const {
    isSuccess,
    data: {
      data: cards,
      pagination: { total },
    },
  } = useSuspenseQuery({
    queryKey: ["cards", currentPage],
    queryFn: async () => {
      return await fetchAndPaginateCards(12, currentPage);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setTotalPages(total);
    }
  }, [isSuccess, setTotalPages, total]);

  return <CardsGrid cards={cards} />;
};

export default CardsGridContainer;
