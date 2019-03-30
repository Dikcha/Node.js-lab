import { PropertiesService } from "../../services/properties";

const propertiesService = new PropertiesService();

export async function getListOfProperties(req) {
    return await propertiesService.getListOfProperties(req);
}