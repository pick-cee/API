import { BaseEntity } from 'typeorm';
import { Parent } from 'src/parent/parent.entity';
import { Class } from 'src/Class/class.entity';
import { Teacher } from 'src/Teacher/teacher.entity';
import { School } from 'src/School/school.entities';
import { Report } from 'src/Report-Card/report.entities';
export declare class Student extends BaseEntity {
    id: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    age: string;
    password: string;
    hashPassword(): Promise<void>;
    date_of_birth: string;
    health_issues: string;
    birth_certificate: string;
    gender: string;
    email: string;
    profile_pic: string;
    address: string;
    parent: Parent;
    class: Class;
    teacher: Teacher;
    school: School;
    report: Report;
}
