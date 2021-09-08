/// <reference types="multer" />
import { AccManager } from './Acc_Man-entity';
import { AccManService } from './Acc_Man-Services';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
export declare class AccManController {
    private readonly accManService;
    constructor(accManService: AccManService);
    uploadedFile(accManData: AccManager, profile_pic: Express.Multer.File): Promise<{
        accManData: AccManager;
        file: string;
        createdUser: any;
    }>;
    getSingleAccMan(accMan_email: string): Promise<AccManager>;
    ggetAll(): Promise<AccManager[]>;
    logIn(request: RequestWithUser): Promise<AccManager>;
    update(id: any, accManData: AccManager): Promise<any>;
    removeParent(accMan_id: string): any;
}
