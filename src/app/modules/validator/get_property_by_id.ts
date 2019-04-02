import * as joi from 'joi';
import { ValidationError } from "../error";

export function validateId(id) {
    const result = joi.validate(id, joi.number().min(1).required());

    if (result.error) {
        throw new ValidationError('Invalid id');
    }
}