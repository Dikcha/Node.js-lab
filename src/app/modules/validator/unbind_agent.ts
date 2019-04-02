import * as joi from 'joi';
import { ValidationError } from "../error";

export function validateUnbindAgent(propertyId) {
    const result = joi.validate(propertyId, joi.number().min(1).required());

    if (result.error) {
        throw new ValidationError('Invalid property id');
    }
}