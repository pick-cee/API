/// <reference types="multer" />
import RequestWithUser from 'src/authentication/requestWithUser.interface';
import { School } from './school.entities';
import { schoolServices } from './school.services';
export declare class schoolController {
    private readonly schoolService;
    constructor(schoolService: schoolServices);
    uploadedFile(schoolData: School, profile_pic: Express.Multer.File): Promise<{
        schoolData: School;
        file: string;
        createdUser: School;
    }>;
    getAll(): Promise<School[]>;
    logIn(request: RequestWithUser): Promise<School>;
    update(id: any, schoolData: School): Promise<any>;
    delete(id: any): Promise<any>;
}
