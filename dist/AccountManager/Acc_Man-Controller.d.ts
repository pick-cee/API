import { AccManager } from './Acc_Man-entity';
import { AccManService } from './Acc_Man-Services';
import { AuthenticationService } from 'src/authentication/authentication.service';
export declare class AccManController {
    private readonly accManService;
    constructor(accManService: AccManService, validate: AuthenticationService);
    addAccMan(accManData: AccManager): Promise<any>;
    getSingleAccMan(accMan_email: string): Promise<AccManager>;
    ggetAll(): Promise<AccManager[]>;
    update(id: any, accManData: AccManager): Promise<any>;
    removeParent(accMan_id: string): any;
}
