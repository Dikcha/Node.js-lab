import * as joi from 'joi';
import { bindAgentToPropertySchema } from "./schemas/bind_agent_to_property_schema";
import { ValidationError } from "../error";

export function validateBindAgentToProperty(propertyId, agentId) {
    const result = joi.validate({ propertyId, agentId }, bindAgentToPropertySchema);

    if (result.error) {
        throw new ValidationError('Invalid binding info (property or agentId)');
    }
}