import * as LRU from 'lru-cache';

export class CacheService {
    private cache;

    constructor() {
        this.cache = new LRU({
            max: 5,
            maxAge: 1000 * 30
        })
    }

    async set(req, data) {
        await this.cache.set(`${req.method}${req.originalUrl}`, data);
    }

    async get(req) {
        return await this.cache.get(`${req.method}${req.originalUrl}`);
    }
}