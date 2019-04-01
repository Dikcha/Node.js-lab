import * as joi from 'joi';

export const updateOfficeSchema = {
    title: joi.string(),
    website: joi.string(),
    address: joi.string(),
};