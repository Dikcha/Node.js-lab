import * as joi from 'joi';

export const bindAgentToOfficeSchema = {
    officeId: joi.number().min(1).required(),
    agentId: joi.number().min(1).required()
};