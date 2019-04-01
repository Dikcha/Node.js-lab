import { AgentsService } from "../../services/agents";

const agentsService = new AgentsService();

export async function deleteAgent(agentId) {
    return await agentsService.deleteAgent(agentId);
}