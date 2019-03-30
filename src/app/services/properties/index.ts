import { Service } from "../base";
import { IMeta } from "../base/interfaces";
import { PropertiesModel } from "../../models/properties";
import { validateId } from "../../modules/validator/get_property_by_id";
import { validateCreateProperty } from "../../modules/validator/create_property";
import { validateUpdateProperty } from "../../modules/validator/udpdate_property";
import { AgentsModel } from "../../models/agents";
import { validateBindAgentToProperty } from "../../modules/validator/bind_agent_to_property";

export class PropertiesService extends Service {
    constructor() {
        super();
    }

    async getListOfProperties(req) {
        const {limit, offset, sortField, sortOrder}: IMeta = await this.getMeta(req);

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
        await this.checkIfPropertyExistById(propertyId);
        await this.checkIfAgentExistById(agentId);

        await PropertiesModel.update({ agentId }, {
            where: {
                id: propertyId,
            },
        });

        return await PropertiesModel.findById(propertyId);
    }


    private async checkIfPropertyExistById(propertyId) {
        const property = await PropertiesModel.findOne({
            where: {
                id: propertyId,
            },
        });

        if (!property) {
            throw new Error('Property id does not exist');
        }
    }

    private async checkIfAgentExistById(agentId) {
        const property = await AgentsModel.findOne({
            where: {
                id: agentId,
            },
        });

        if (!property) {
            throw new Error('Agent id does not exist');
        }
    }
}