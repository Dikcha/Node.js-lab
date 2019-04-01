import { Service } from "../base";
import { IMeta } from "../base/interfaces";
import { OfficesModel } from "../../models/offices";

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
}