import * as joi from 'joi';

export function validateUnbindOffice(agentId) {
    const result = joi.validate(agentId, joi.number().min(1).required());

    if (result.error) {
        throw new Error('Invalid info');
    }

}