import { PropertiesService } from "../../services/properties";

const propertiesService = new PropertiesService();

export async function createProperty(property) {
    return await propertiesService.createProperty(property);
}