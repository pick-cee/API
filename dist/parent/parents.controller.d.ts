/// <reference types="multer" />
import { Parent } from './parent.entity';
import { parentService } from './parents.service';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
export declare class ParentsController {
    private readonly parentsService;
    constructor(parentsService: parentService);
    uploadedFile(parentData: Parent, profile_pic: Express.Multer.File): Promise<{
        parentData: Parent;
        file: string;
        createdUser: Parent;
    }>;
    getSingle(parent_email: string): Promise<Parent>;
    getAll(): Promise<Parent[]>;
    logIn(request: RequestWithUser): Promise<Parent>;
    update(id: any, parData: Parent): Promise<any>;
    removeParent(parent_id: string): any;
}
