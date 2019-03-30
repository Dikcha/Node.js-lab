import { PropertiesService } from "../../services/properties";

const propertiesService = new PropertiesService();

export async function deleteProperty(propertyId) {
    await propertiesService.deleteProperty(propertyId);
}