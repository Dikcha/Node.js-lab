import { AgentsService } from "../../services/agents";
import * as CacheCtrl from '../cache';

const agentsService = new AgentsService();

export async function getListOfAgents(req) {
    const cache = await CacheCtrl.getCache(req);
    if (cache) {
        return cache;
    }

    const listOfAgents = await agentsService.getListOfAgents(req);

    await CacheCtrl.setCache(req, listOfAgents);

    return listOfAgents;
}