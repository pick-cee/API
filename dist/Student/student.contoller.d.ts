import { Student } from './student.entities';
import { studentServices } from './student.services';
export declare class studentController {
    private readonly studentService;
    constructor(studentService: studentServices);
    addStudent(studentData: Student): Promise<any>;
    getSingleStudent(student_email: string): Promise<Student>;
    getAll(): Promise<Student[]>;
    update(id: any, studentData: Student): Promise<any>;
    delete(id: any): Promise<any>;
}
