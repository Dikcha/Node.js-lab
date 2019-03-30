import { PropertiesService } from "../../services/properties";

const propertiesService = new PropertiesService();

export async function unbindAgent(propertyId) {
    return await propertiesService.unbindAgent(propertyId);
}
