import { OfficesService } from "../../services/offices";

const officeService = new OfficesService();

export async function createOffice(office) {
    return await officeService.createOffice(office);
}