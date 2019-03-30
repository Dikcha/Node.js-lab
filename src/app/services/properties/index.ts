import { Service } from "../base";
import { IMeta } from "../base/interfaces";
import { PropertiesModel } from "../../models/properties";
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
}