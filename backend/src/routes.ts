import type {
	FastifyInstance,
	FastifyPluginOptions,
	FastifyRequest,
	FastifyReply,
} from "fastify";
import { CardController } from "./controller/cardController";

export async function routes(
	fastify: FastifyInstance,
	options: FastifyPluginOptions,
) {
	fastify.get("/card", async (request: FastifyRequest, reply: FastifyReply) => {
		return { ok: true };
	});
	fastify.post(
		"/custommer",
		async (request: FastifyRequest, reply: FastifyReply) => {
			return new CardController().handle(request, reply);
		},
	);
}
