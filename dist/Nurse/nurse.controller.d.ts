import { Nurse } from './nurse.entities';
import { nurseServices } from './nurse.services';
export declare class nurseController {
    private readonly nurseService;
    constructor(nurseService: nurseServices);
    addNurse(nurseData: Nurse): Promise<any>;
    getSingleNurse(nurse_email: string): Promise<Nurse>;
    getAll(): Promise<Nurse[]>;
    update(id: any, nurseData: Nurse): Promise<any>;
    delete(id: any): Promise<any>;
}
