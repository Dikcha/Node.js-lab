import * as joi from 'joi';

export function validateId(propertyId) {
    const result = joi.validate(propertyId , joi.number());

    if(result.error) {
        throw new Error('Id should be a number');
    }
}