import * as joi from 'joi';
import { updateOfficeSchema } from "./schemas/update_office_schema";
import { ValidationError } from "../error";

export function validateUpdateOffice(office) {
    const result = joi.validate(office, updateOfficeSchema);

    if (result.error) {
        throw new ValidationError('Invalid updating office payload');
    }

}