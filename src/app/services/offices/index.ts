import { Service } from "../base";
import { IMeta } from "../base/interfaces";
import { OfficesModel } from "../../models/offices";
import { validateId } from "../../modules/validator/get_property_by_id";
import { checkIfOfficeExistById } from "../../models/offices/methods";

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
}