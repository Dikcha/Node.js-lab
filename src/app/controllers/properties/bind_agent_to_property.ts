import { PropertiesService } from "../../services/properties";

const propertiesService = new PropertiesService();

export async function bindAgentToProperty(propertyId, agentId) {
    return await propertiesService.bindAgentToProperty(propertyId, agentId);
}
