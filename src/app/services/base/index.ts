import { getLimitFromRequest, getOffsetFromRequest, getSortField, getSortOrder } from "../../modules/helper";
import { IMeta } from "./interfaces";

export class Service {
    constructor() { };
    getMeta(req) {
        const meta: IMeta = {
            limit: 10,
            offset: 1,
            sortField: 'id',
            sortOrder: 'asc'
        };
        return this.getLimit(req)
            .then((limit: number) => {
                meta.limit = limit;
                return this.getOffset(req);
            })
            .then((offset: number) => {
                meta.offset = (offset-1) * meta.limit;
                return this.getSortField(req);
            })
            .then((sortField: string) => {
                meta.sortField = sortField;
                return this.getSortOrder(req);
            })
            .then((sortOrder: string) => {
                meta.sortOrder = sortOrder;
                return Promise.resolve(meta);
            })
    }

    private getLimit(req) {
        return new Promise((resolve) => {
           resolve(getLimitFromRequest(req));
        });
    }

    private getOffset(req) {
        return new Promise((resolve) => {
            resolve(getOffsetFromRequest(req));
        })
    }

    private getSortField(req) {
        return new Promise((resolve) => {
           resolve(getSortField(req));
        });
    }

    private getSortOrder(req) {
        return new Promise((resolve) => {
            resolve(getSortOrder(req));
        })
    }
}