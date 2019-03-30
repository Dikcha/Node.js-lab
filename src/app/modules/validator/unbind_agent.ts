import * as joi from 'joi';

export function validateUnbindAgent(propertyId) {
    const result = joi.validate(propertyId, joi.number().min(1).required());

    if (result.error) {
        throw new Error('Invalid info');
    }

}