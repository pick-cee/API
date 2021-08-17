import { AccManager } from './Acc_Man-entity';
import { AccManService } from './Acc_Man-Services';
export declare class AccManController {
    private readonly accManService;
    constructor(accManService: AccManService);
    addAccMan(accManData: AccManager): Promise<any>;
    ggetAll(): Promise<AccManager[]>;
    update(id: any, accManData: AccManager): Promise<any>;
    removeParent(accMan_id: string): any;
}
