"use client";
import YugiohCard from "@/components/yugioh-card";
import { Card } from "@/models/card";

const CardsGrid = ({ cards }: { cards: Array<Card> }) => {
  return (
    <div className="pr-8 py-[32px] grid grid-cols-[repeat(auto-fill,minmax(205px,1fr))] gap-8">
      {cards?.map((card) => (
        <YugiohCard
          key={card.id}
          name={card.name}
          imageUrl={card.card_images[0].image_url}
          type={card.type}
          description={card.desc}
        />
      ))}
    </div>
  );
};

export default CardsGrid;
