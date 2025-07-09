import prismaClient from "../prisma";

class CardService {
	async execute() {
		console.log("Service ta rodando");
		return { ok: true };
	}
}
export { CardService };
