import * as joi from 'joi';

export const createAgentSchema = {
    name: joi.string().required(),
    email: joi.string().email().required(),
    tel: joi.string().required(),
    officeId: joi.number().min(1)
};