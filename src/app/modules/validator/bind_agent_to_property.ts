import * as joi from 'joi';
import { bindAgentToPropertySchema } from "./schemas/bind_agent_to_property";

export function validateBindAgentToProperty(propertyId, agentId) {
    const result = joi.validate({ propertyId, agentId }, bindAgentToPropertySchema);

    if(result.error) {
        throw new Error('Invalid binding info');
    }
}