import { AgentsService } from "../../services/agents";

const agentsService = new AgentsService();

export async function unbindOffice(agentId) {
    return await agentsService.unbindOffice(agentId);
}