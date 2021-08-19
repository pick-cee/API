import { Student } from 'src/Student/student.entities';
import { BaseEntity } from 'typeorm';
export declare class Report extends BaseEntity {
    id: string;
    subject: string;
    grade: string;
    comment: string;
    student_id: number;
    teacher_id: number;
    student: Student;
    student1: Student['id'];
}
