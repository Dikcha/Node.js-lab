import { Service } from "../base";
import { IMeta } from "../base/interfaces";
import { OfficesModel } from "../../models/offices";
import { validateId } from "../../modules/validator/get_property_by_id";
import { checkIfOfficeExistById } from "../../models/offices/methods";
import { validateCreateOffice } from "../../modules/validator/create_office";
import { validateUpdateOffice } from "../../modules/validator/udapte_office";
import { getLimitFromRequest, getOffsetFromRequest } from "../../modules/helper";
import { AgentsModel } from "../../models/agents";

export class OfficesService extends Service {
    constructor() {
        super();
    }

    async getListOfOffices(req) {
        const {limit, offset, sortField, sortOrder}: IMeta = await this.getMeta(req);

        return await OfficesModel.findAll({
            limit,
            offset,
            order: [
                [sortField, sortOrder],
            ],
            raw: true,
        })
    }

    async getOfficeById(officeId) {
        validateId(officeId);
        await checkIfOfficeExistById(officeId);

        return await OfficesModel.findById(officeId, {
            raw: true,
        });
    }

    async createOffice(office) {
        validateCreateOffice(office);

        return await OfficesModel.create(office);
    }

    async updateOffice(officeId, office) {
        validateId(officeId);
        validateUpdateOffice(office);

        await OfficesModel.update(office, {
            where: {
                id: officeId,
            },
        });

        return await OfficesModel.findById(officeId);
    }

    async deleteOffice(officeId) {
        validateId(officeId);

        await OfficesModel.destroy({
            where: {
                id: officeId,
            },
        });
    }

    async getListOfOfficesAgents(req) {
        const officeId = +req.params.id;
        validateId(officeId);
        const limit = getLimitFromRequest(req);
        const offset = (getOffsetFromRequest(req) - 1) * limit;

        return await AgentsModel.findAll({
            where: {
                officeId,
            },
            limit,
            offset,
        });
    }
}