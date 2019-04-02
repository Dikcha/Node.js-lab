import { CacheService } from "../../services/cache";

const cacheService = new CacheService();

export async function getCache(req) {
    return await cacheService.get(req);
}

export async function setCache(req, data) {
    await cacheService.set(req, data);
}