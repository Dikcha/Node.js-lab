import * as joi from 'joi';
import { updatePropertySchema } from "./schemas/update_property_schema";
import { ValidationError } from "../error";

export function validateUpdateProperty(property) {
    const result = joi.validate(property, updatePropertySchema);

    if (result.error) {
        throw new ValidationError('Invalid updating property payload');
    }
}