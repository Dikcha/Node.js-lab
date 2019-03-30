import { AgentsService } from "../../services/agents";

const agentsService = new AgentsService();

export async function getAgentById(agentId) {
    return await agentsService.getAgentById(agentId);
}