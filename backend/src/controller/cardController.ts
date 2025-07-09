import type { FastifyRequest, FastifyReply } from "fastify";
import { CardService } from "../service/cardService";

class CardController {
	async handle(request: FastifyRequest, reply: FastifyReply) {
		const cardService = new CardService();

		const custommer = await cardService.execute();

		reply.send(custommer);
	}
}
export { CardController };
