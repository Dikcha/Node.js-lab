import { AgentsService } from "../../services/agents";

const agentsService = new AgentsService();

export async function getListOfAgents(req) {
    return await agentsService.getListOfAgents(req);
}