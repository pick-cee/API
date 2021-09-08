/// <reference types="multer" />
import { Nurse } from './nurse.entities';
import { nurseServices } from './nurse.services';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
export declare class nurseController {
    private readonly nurseService;
    constructor(nurseService: nurseServices);
    uploadedFile(nurseData: Nurse, profile_pic: Express.Multer.File): Promise<{
        nurseData: Nurse;
        file: string;
        createdUser: Nurse;
    }>;
    logIn(request: RequestWithUser): Promise<Nurse>;
    getSingleNurse(nurse_email: string): Promise<Nurse>;
    getAll(): Promise<Nurse[]>;
    update(id: any, nurseData: Nurse): Promise<any>;
    delete(id: any): Promise<any>;
}
