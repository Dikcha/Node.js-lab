import { PropertiesModel } from "../";

export async function checkIfPropertyExistById(propertyId) {
    const property = await PropertiesModel.findOne({
        where: {
            id: propertyId,
        },
    });

    if (!property) {
        throw new Error('Property id does not exist');
    }
}