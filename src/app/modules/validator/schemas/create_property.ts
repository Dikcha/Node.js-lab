import * as joi from 'joi';

export const createPropertySchema = {
    price: joi.number().min(1).required(),
    currency: joi.string().valid('USD', 'BYN', 'EUR').required(),
    heading: joi.string().required(),
    agentId: joi.number().min(1),
    location: joi.string().required(),
};