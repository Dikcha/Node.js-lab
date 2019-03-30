import * as joi from 'joi';

export const updatePropertySchema = {
    price: joi.number().min(1),
    currency: joi.string().valid('USD', 'BYN', 'EUR'),
    heading: joi.string(),
    agentId: joi.number().min(1),
    location: joi.string(),
};