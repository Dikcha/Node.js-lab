import { AgentsService } from "../../services/agents";

const agentsService = new AgentsService();

export async function createAgent(agent) {
    return await agentsService.createAgent(agent);
}