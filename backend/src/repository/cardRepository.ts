import type { ICard } from "../models/card";

let cards: ICard[] = [];

export class cardRepository {
	public list = () => {
		return cards;
	};
	public create = (card: ICard) => {
		const exists = cards.findIndex((c) => card.id === c.id);
		if (exists !== -1) {
			return "Essa Carta já existe";
		}
		cards.push(card);
		return card;
	};
	public delete = (id: number) => {
		const exists = cards.findIndex((c) => id === c.id);
		if (exists === -1) {
			return "Essa Carta não foi encontrada";
		}
		cards = cards.filter((card) => card.id !== id);
		return 1;
	};
}
