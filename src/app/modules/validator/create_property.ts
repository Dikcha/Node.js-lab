import * as joi from 'joi';
import { createPropertySchema } from "./schemas/create_property";

export function validateCreateProperty(property) {
    const result = joi.validate(property, createPropertySchema);

    if(result.error) {
        throw new Error('Invalid property');
    }
}