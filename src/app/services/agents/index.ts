import { Service } from "../base";
import { IMeta } from "../base/interfaces";
import { AgentsModel } from "../../models/agents";
import { validateId } from "../../modules/validator/get_property_by_id";
import { checkIfAgentExistById } from "../../models/agents/methods";
import { validateCreateAgent } from "../../modules/validator/create_agent";
import { validateUpdateAgent } from "../../modules/validator/update_agent";
import { validateBindAgentToOffice } from "../../modules/validator/bind_agent_to_office";
import { checkIfOfficeExistById } from "../../models/offices/methods";
import { validateUnbindOffice } from "../../modules/validator/unbind_office";
import { PropertiesModel } from "../../models/properties";
import { getLimitFromRequest, getOffsetFromRequest } from "../../modules/helper";

export class AgentsService extends Service {
    constructor() {
        super();
    }

    async getListOfAgents(req) {
        const {limit, offset, sortField, sortOrder}: IMeta = await this.getMeta(req);

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

    async updateAgent(agentId, agent) {
        validateUpdateAgent(agent);
        await checkIfAgentExistById(agentId);

        await AgentsModel.update(agent, {
            where: {
                id: agentId,
            },
        });

        return await AgentsModel.findById(agentId);
    }

    async deleteAgent(agentId) {
        validateId(agentId);

        await AgentsModel.destroy({
            where: {
                id: agentId,
            },
        });
    }

    async bindAgentToOffice(officeId, agentId) {
        validateBindAgentToOffice(officeId, agentId);
        await checkIfOfficeExistById(officeId);
        await checkIfAgentExistById(agentId);

        await AgentsModel.update({officeId}, {
            where: {
                id: agentId,
            },
        });

        return await AgentsModel.findById(agentId);
    }

    async unbindOffice(agentId) {
        validateUnbindOffice(agentId);
        await checkIfAgentExistById(agentId);

        await AgentsModel.update({officeId: null}, {
            where: {
                id: agentId,
            },
        });

        return await AgentsModel.findById(agentId);
    }

    async getListOfAgentProperties(req) {
        const agentId = +req.params.id;
        validateId(agentId);
        const limit = getLimitFromRequest(req);
        const offset = (getOffsetFromRequest(req) - 1) * limit;

        return await PropertiesModel.findAll({
            where: {
                agentId,
            },
            limit,
            offset,
        });
    }
}