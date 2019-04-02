import * as joi from 'joi';
import { createOfficeSchema } from "./schemas/create_office_schema";
import { ValidationError } from "../error";

export function validateCreateOffice(office) {
    const result = joi.validate(office, createOfficeSchema);

    if (result.error) {
        throw new ValidationError('Invalid creating office payload');
    }
}