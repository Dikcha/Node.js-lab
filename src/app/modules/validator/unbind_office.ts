import * as joi from 'joi';
import { ValidationError } from "../error";

export function validateUnbindOffice(agentId) {
    const result = joi.validate(agentId, joi.number().min(1).required());

    if (result.error) {
        throw new ValidationError('Invalid office id');
    }
}