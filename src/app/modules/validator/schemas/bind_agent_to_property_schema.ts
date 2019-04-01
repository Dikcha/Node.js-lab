import * as joi from 'joi';

export const bindAgentToPropertySchema = {
    propertyId: joi.number().min(1).required(),
    agentId: joi.number().min(1).required()
};