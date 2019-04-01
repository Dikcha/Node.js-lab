import { OfficesService } from "../../services/offices";

const officeService = new OfficesService();

export async function getOfficeById(officeId) {
    return await officeService.getOfficeById(officeId);
}