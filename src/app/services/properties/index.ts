import { Service } from "../base";
import { IMeta } from "../base/interfaces";
import { PropertiesModel } from "../../models/properties";
import { validateId } from "../../modules/validator/get_property_by_id";
import { validateCreateProperty } from "../../modules/validator/create_property";
import { validateUpdateProperty } from "../../modules/validator/udpdate_property";
import { validateBindAgentToProperty } from "../../modules/validator/bind_agent_to_property";
import { validateUnbindAgent } from "../../modules/validator/unbind_agent";
import { checkIfPropertyExistById } from "../../models/properties/methods";
import { checkIfAgentExistById } from "../../models/agents/methods";

export class PropertiesService extends Service {
    constructor() {
        super();
    }

    async getListOfProperties(req) {
        const { limit, offset, sortField, sortOrder }: IMeta = await this.getMeta(req);

        return await PropertiesModel.findAll({
            limit,
            offset,
            order: [
                [sortField, sortOrder],
            ],
            raw: true,
        })
    }

    async getPropertyById(propertyId) {
        validateId(propertyId);
        await checkIfPropertyExistById(propertyId);

        return await PropertiesModel.findById(propertyId, {
            raw: true,
        });
    }

    async createProperty(property) {
        validateCreateProperty(property);

        return await PropertiesModel.create(property);
    }

    async updateProperty(propertyId, property) {
        validateUpdateProperty(property);
        await checkIfPropertyExistById(propertyId);

        await PropertiesModel.update(property, {
            where: {
                id: propertyId,
            },
        });

        return await PropertiesModel.findById(propertyId);
    }

    async deleteProperty(propertyId) {
        validateId(propertyId);

        await PropertiesModel.destroy({
            where: {
                id: propertyId,
            },
        });
    }

    async bindAgentToProperty(propertyId, agentId) {
        validateBindAgentToProperty(propertyId, agentId);
        await checkIfPropertyExistById(propertyId);
        await checkIfAgentExistById(agentId);

        await PropertiesModel.update({ agentId }, {
            where: {
                id: propertyId,
            },
        });

        return await PropertiesModel.findById(propertyId);
    }

    async unbindAgent(propertyId) {
        validateUnbindAgent(propertyId);
        await checkIfPropertyExistById(propertyId);

        await PropertiesModel.update({ agentId: null }, {
            where: {
                id: propertyId,
            },
        });

        return await PropertiesModel.findById(propertyId);
    }
}