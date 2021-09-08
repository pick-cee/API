/// <reference types="multer" />
import { Teacher } from './teacher.entity';
import { teacherServices } from './teacher.services';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
export declare class teacherController {
    private readonly teacherService;
    constructor(teacherService: teacherServices);
    uploadedFile(teacherData: Teacher, profile_pic: Express.Multer.File): Promise<{
        teacherData: Teacher;
        file: string;
        createdUser: Teacher;
    }>;
    getSingleTeacher(teacher_email: string): Promise<Teacher>;
    getAll(): Promise<Teacher[]>;
    logIn(request: RequestWithUser): Promise<Teacher>;
    update(id: any, teacherData: Teacher): Promise<any>;
    delete(id: any): Promise<any>;
}
