import * as joi from 'joi';

export const propertySchema = {
    price: joi.number().min(1),
    currency: joi.string().valid('USD', 'BYN', 'EUR').required(),
    heading: joi.required(),
    agentId: joi.required(),
    location: joi.required(),
};