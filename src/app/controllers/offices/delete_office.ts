import { OfficesService } from "../../services/offices";

const officeService = new OfficesService();

export async function deleteOffice(officeId) {
    return await officeService.deleteOffice(officeId);
}