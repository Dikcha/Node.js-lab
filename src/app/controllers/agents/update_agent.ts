import { AgentsService } from "../../services/agents";

const agentsService = new AgentsService();

export async function updateAgent(agentId, agent) {
    return await agentsService.updateAgent(agentId, agent);
}