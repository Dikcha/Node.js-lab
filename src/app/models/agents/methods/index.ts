import { AgentsModel } from "../";
import { NotFoundError } from "../../../modules/error";

export async function checkIfAgentExistById(agentId) {
    const property = await AgentsModel.findOne({
        where: {
            id: agentId,
        },
    });

    if (!property) {
        throw new NotFoundError('Agent with such id does not exist');
    }
}