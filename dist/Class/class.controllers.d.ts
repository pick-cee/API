import { Class } from './class.entity';
import { classServices } from './class.services';
export declare class securityController {
    private readonly classService;
    constructor(classService: classServices);
    addSecurity(classData: Class): Promise<any>;
    getAll(): Promise<Class[]>;
    update(id: any, classData: Class): Promise<any>;
    delete(id: any): Promise<any>;
}
