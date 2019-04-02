import * as joi from 'joi';
import { createAgentSchema } from "./schemas/create_agent_schema";
import { ValidationError } from "../error";

export function validateCreateAgent(agent) {
    const result = joi.validate(agent, createAgentSchema);

    if (result.error) {
        throw new ValidationError('Invalid creating agent payload');
    }
}