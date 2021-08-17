import { Security } from './security.entity';
import { securityServices } from './security.services';
export declare class securityController {
    private readonly secService;
    constructor(secService: securityServices);
    addSecurity(secData: Security): Promise<any>;
    getAll(): Promise<Security[]>;
    update(id: any, secData: Security): Promise<any>;
    delete(id: any): Promise<any>;
}
