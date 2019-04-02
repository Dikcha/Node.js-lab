import * as joi from 'joi';
import { updateAgentSchema } from "./schemas/update_agent_schema";
import { ValidationError } from "../error";

export function validateUpdateAgent(agent) {
    const result = joi.validate(agent, updateAgentSchema);

    if(result.error) {
        throw new ValidationError('Invalid updating agent payload');
    }
}