import { AgentsService } from "../../services/agents";

const agentsService = new AgentsService();

export async function getListOfAgentProperties(req) {
    return await agentsService.getListOfAgentProperties(req);
}