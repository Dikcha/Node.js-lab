import * as joi from 'joi';
import { updateAgentSchema } from "./schemas/update_agent";

export function validateUpdateAgent(agent) {
    const result = joi.validate(agent, updateAgentSchema);

    if(result.error) {
        throw new Error('Invalid agent');
    }
}