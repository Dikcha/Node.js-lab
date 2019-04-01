import * as joi from 'joi';

export const updateAgentSchema = {
    name: joi.string(),
    email: joi.string().email(),
    tel: joi.string(),
    officeId: joi.number().min(1)
};