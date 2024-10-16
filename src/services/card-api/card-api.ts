import { Card } from "@/models/card";

export interface ICardService {
    getAllCards({}: { perPage?: number }): Promise<Card[]>;
    getCardByName(name: string): Promise<Card | null>;
}