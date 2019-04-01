import { OfficesService } from "../../services/offices";

const officeService = new OfficesService();

export async function getListOfOffices(req) {
    return await officeService.getListOfOffices(req);
}