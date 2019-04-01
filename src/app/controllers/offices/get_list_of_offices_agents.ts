import { OfficesService } from "../../services/offices";

const officeService = new OfficesService();

export async function getListOfOfficesAgents(req) {
    return await officeService.getListOfOfficesAgents(req);
}