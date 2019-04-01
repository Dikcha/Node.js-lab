import * as joi from 'joi';

export const createOfficeSchema = {
    title: joi.string().required(),
    website: joi.string().required(),
    address: joi.string().required(),
};