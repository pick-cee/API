import { Security } from './security.entity';
import { securityServices } from './security.services';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
export declare class securityController {
    private readonly secService;
    constructor(secService: securityServices);
    addParent(secData: Security): Promise<any>;
    getSingleSecurity(security_email: string): Promise<Security>;
    getAll(): Promise<Security[]>;
    logIn(request: RequestWithUser): Promise<Security>;
    update(id: any, secData: Security): Promise<any>;
    delete(id: any): Promise<any>;
}
