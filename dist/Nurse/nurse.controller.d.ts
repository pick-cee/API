import { Nurse } from './nurse.entities';
import { nurseServices } from './nurse.services';
export declare class securityController {
    private readonly nurseService;
    constructor(nurseService: nurseServices);
    addSecurity(nurseData: Nurse): Promise<any>;
    getAll(): Promise<Nurse[]>;
    update(id: any, nurseData: Nurse): Promise<any>;
    delete(id: any): Promise<any>;
}
