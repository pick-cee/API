import { Student } from 'src/Student/student.entities';
import { BaseEntity } from 'typeorm';
export declare class Class extends BaseEntity {
    id: string;
    name: string;
    student: Student;
}
