import * as joi from 'joi';
import { createPropertySchema } from "./schemas/create_property_schema";
import { ValidationError } from "../error";

export function validateCreateProperty(property) {
    const result = joi.validate(property, createPropertySchema);

    if (result.error) {
        throw new ValidationError('Invalid creating property payload');
    }
}