import { Student } from 'src/Student/student.entities';
import { Teacher } from 'src/Teacher/teacher.entity';
import { BaseEntity } from 'typeorm';
export declare class Report extends BaseEntity {
    id: string;
    subject: string;
    grade: string;
    comment: string;
    student: Student;
    teacher: Teacher;
}
