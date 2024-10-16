"use client";
import React from "react";
import YugiohCard from "@/components/yugioh-card";
import { Card } from "@/models/card";
import PaginationComponent from "@/components/client-pagination";

const CardsGrid = ({ paginatedCards }: { paginatedCards: Array<Card> }) => {
  return (
    <div
      className={
        "overflow-y-auto fixed top-[64px] bottom-0 right-0 w-[calc(100%-280px)]"
      }
    >
      <div className="pr-8 py-[32px] grid grid-cols-[repeat(auto-fill,minmax(205px,1fr))] gap-8">
        {paginatedCards.map((card) => (
          <YugiohCard
            key={card.id}
            name={card.name}
            imageUrl={card.card_images[0].image_url}
            type={card.type}
            description={card.desc}
          />
        ))}
      </div>
      <PaginationComponent totalPages={1300} />
    </div>
  );
};

export default CardsGrid;
