import { OfficesModel } from "../index";

export async function checkIfOfficeExistById(officeId) {
    const office = await OfficesModel.findOne({
        where: {
            id: officeId,
        },
    });

    if (!office) {
        throw new Error('Office id does not exist');
    }
}