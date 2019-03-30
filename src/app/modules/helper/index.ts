export function getLimitFromRequest(req): number {
    const defaultLimit = 10
    const pageSize = req.query.page_size;

    if (pageSize) {
        return +pageSize;
    }

    return defaultLimit;
}

export function getOffsetFromRequest(req): number {
    const defaultPage = 1;
    const page = req.query.page;

    if(page) {
        return +page;
    }

    return defaultPage;
}

export function getSortField(req): string {
    const defaultField = 'id';
    const orderField = req.query.order_field;

    if(orderField){
        return orderField;
    }

    return defaultField;
}

export function getSortOrder(req): string {
    const defaultOrder = 'asc';
    const sortOrder = req.query.sort_order;

    if(sortOrder) {
        return sortOrder;
    }

    return defaultOrder;
}