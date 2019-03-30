import * as joi from 'joi';

export function validateId(id) {
    const result = joi.validate(id, joi.number().required());

    if (result.error) {
        throw new Error('Id should be a number');
    }
}