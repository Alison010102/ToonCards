import type { ICard } from "../models/card";
import { cardRepository } from "../repository";

export class cardService {
	private repository: cardRepository;

	constructor() {
		this.repository = new cardRepository();
	}

	public list = () => {
		return this.repository.list();
	};
	public create = (card: ICard) => {
		return this.repository.create(card);
	};
	public delete = (id: number) => {
		return this.repository.delete(id);
	};
}
