import { PropertiesService } from "../../services/properties";

const propertiesService = new PropertiesService();

export async function updateProperty(propertyId, property) {
    return await propertiesService.updateProperty(propertyId, property);
}