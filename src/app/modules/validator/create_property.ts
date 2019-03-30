import * as joi from 'joi';
import { propertySchema } from "./schemas/property";

export function validateProperty(property) {
    const result = joi.validate(property, propertySchema);

    if(result.error) {
        throw new Error('Invalid property');
    }

}