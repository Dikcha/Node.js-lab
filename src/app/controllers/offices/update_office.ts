import { OfficesService } from "../../services/offices";

const officeService = new OfficesService();

export async function updateOffice(officeId, office) {
    return await officeService.updateOffice(officeId, office);
}