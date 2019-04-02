import { OfficesModel } from "../index";
import { NotFoundError } from "../../../modules/error";

export async function checkIfOfficeExistById(officeId) {
    const office = await OfficesModel.findOne({
        where: {
            id: officeId,
        },
    });

    if (!office) {
        throw new NotFoundError('Office with such id does not exist');
    }
}