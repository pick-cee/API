import { BaseEntity } from 'typeorm';
import { Student } from 'src/Student/student.entities';
export declare class Parent extends BaseEntity {
    id: string;
    full_name: string;
    age: number;
    profile_pic: string;
    phone_number: number;
    email: string;
    address: string;
    gender: string;
    student_id: string;
    student: Student[];
    isActive: boolean;
}
