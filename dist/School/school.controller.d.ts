import { School } from './school.entities';
import { schoolServices } from './school.services';
export declare class schoolController {
    private readonly schoolService;
    constructor(schoolService: schoolServices);
    addSecurity(schoolData: School): Promise<any>;
    getAll(): Promise<School[]>;
    update(id: any, schoolData: School): Promise<any>;
    delete(id: any): Promise<any>;
}
