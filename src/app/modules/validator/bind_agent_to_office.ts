import * as joi from 'joi';
import { bindAgentToOfficeSchema } from "./schemas/bind_agent_to_office_schema";

export function validateBindAgentToOffice(officeId, agentId) {
    const result = joi.validate({ officeId, agentId }, bindAgentToOfficeSchema);

    if(result.error) {
        throw new Error('Invalid binding info');
    }
}