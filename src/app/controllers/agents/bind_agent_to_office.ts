import { AgentsService } from "../../services/agents";

const agentsService = new AgentsService();

export async function bindAgentToProperty(officeId, agentId) {
    return await agentsService.bindAgentToOffice(officeId, agentId);
}