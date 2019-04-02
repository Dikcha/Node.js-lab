import { PropertiesModel } from "../";
import { NotFoundError } from "../../../modules/error";

export async function checkIfPropertyExistById(propertyId) {
    const property = await PropertiesModel.findOne({
        where: {
            id: propertyId,
        },
    });

    if (!property) {
        throw new NotFoundError('Property with such id does not exist');
    }
}