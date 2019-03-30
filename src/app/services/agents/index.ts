import { Service } from "../base";
import { IMeta } from "../base/interfaces";
import { AgentsModel } from "../../models/agents";

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
}