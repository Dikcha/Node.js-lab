import * as joi from 'joi';
import { updatePropertySchema } from "./schemas/update_property";

export function validateUpdateProperty(property) {
    const result = joi.validate(property, updatePropertySchema);

    if (result.error) {
        throw new Error('Invalid property');
    }

}