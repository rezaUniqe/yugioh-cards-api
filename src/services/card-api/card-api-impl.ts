import axios from 'axios';
import {ICardService} from "@/services/card-api/card-api";
import {Card} from "@/models/card";

const BASE_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

export class CardServiceImpl implements ICardService {
    async getAllCards({perPage=50}: { perPage?: number }): Promise<Card[]> {
        try {
            const response = await axios.get(BASE_URL, {
                params: {}
            });
            return response.data.data;
        } catch (error) {
            console.error('Error fetching cards:', error);
            throw new Error('Failed to fetch cards');
        }
    }

    async getCardByName(name: string): Promise<Card | null> {
        try {
            const response = await axios.get(`${BASE_URL}?name=${name}`);
            if (response.data && response.data.data && response.data.data.length > 0) {
                return response.data.data[0];
            }
            return null;
        } catch (error) {
            console.error('Error fetching card by name:', error);
            throw new Error('Failed to fetch card by name');
        }
    }
}

export const cardService = new CardServiceImpl();