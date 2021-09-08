/// <reference types="multer" />
import RequestWithUser from 'src/authentication/requestWithUser.interface';
import { Student } from './student.entities';
import { studentServices } from './student.services';
export declare class studentController {
    private readonly studentService;
    constructor(studentService: studentServices);
    uploadedFile(studentData: Student, profile_pic: Express.Multer.File): Promise<{
        studentData: Student;
        file: string;
        createdUser: Student;
    }>;
    getSingleStudent(student_email: string): Promise<Student>;
    getAll(): Promise<Student[]>;
    logIn(request: RequestWithUser): Promise<Student>;
    update(id: any, studentData: Student): Promise<any>;
    delete(id: any): Promise<any>;
}
