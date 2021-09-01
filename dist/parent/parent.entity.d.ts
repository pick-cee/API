import { BaseEntity } from 'typeorm';
import { Student } from 'src/Student/student.entities';
export declare class Parent extends BaseEntity {
    id: string;
    full_name: string;
    age: number;
    profile_pic: string;
    phone_number: string;
    email: string;
    password: string;
    hashPassword(): Promise<void>;
    address: string;
    gender: string;
    student: Student[];
    isActive: boolean;
}
