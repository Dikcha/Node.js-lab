import { AgentsModel } from "../";

export async function checkIfAgentExistById(agentId) {
    const property = await AgentsModel.findOne({
        where: {
            id: agentId,
        },
    });

    if (!property) {
        throw new Error('Agent id does not exist');
    }
}