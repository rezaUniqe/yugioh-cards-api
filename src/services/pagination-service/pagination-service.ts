export class PaginationService<T> {
    private items: T[] = [];
    private readonly perPage: number;

    constructor(perPage: number) {
        this.perPage = perPage;
    }

    setItems(items: T[]) {
        this.items = items;
    }

    getPaginatedItems(page: number): T[] {
        const startIndex = (page - 1) * this.perPage;
        return this.items.slice(startIndex, startIndex + this.perPage);
    }

    getTotalPages(): number {
        return Math.ceil(this.items.length / this.perPage);
    }

    getItemsCount(): number {
        return this.items.length;
    }
}
