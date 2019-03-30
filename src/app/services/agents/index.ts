import { Service } from "../base";
import { IMeta } from "../base/interfaces";
import { AgentsModel } from "../../models/agents";
import { validateId } from "../../modules/validator/get_property_by_id";
import { checkIfAgentExistById } from "../../models/agents/methods";
import { validateCreateAgent } from "../../modules/validator/create_agent";


export class AgentsService extends Service {
    constructor() {
        super();
    }

    async getListOfAgents(req) {
        const { limit, offset, sortField, sortOrder }: IMeta = await this.getMeta(req);

        return await AgentsModel.findAll({
            limit,
            offset,
            order: [
                [sortField, sortOrder],
            ],
            raw: true,
        })
    }

    async getAgentById(agentId) {
        validateId(agentId);
        await checkIfAgentExistById(agentId);

        return await AgentsModel.findById(agentId, {
            raw: true,
        });
    }

    async createAgent(agent) {
        validateCreateAgent(agent);

        return await AgentsModel.create(agent);
    }
}