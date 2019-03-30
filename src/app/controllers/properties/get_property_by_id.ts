import { PropertiesService } from "../../services/properties";

const propertiesService = new PropertiesService();

export async function getPropertyById(propertyId) {
    return await propertiesService.getPropertyById(propertyId);
}
