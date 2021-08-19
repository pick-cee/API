import { BaseEntity } from 'typeorm';
import { Parent } from 'src/parent/parent.entity';
import { Class } from 'src/Class/class.entity';
export declare class Student extends BaseEntity {
    id: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    age: string;
    date_of_birth: string;
    health_issues: string;
    birth_certificate: string;
    gender: string;
    email: string;
    profile_pic: string;
    address: string;
    class_id: string;
    parent_id: string;
    parent: Parent;
    class: Class;
}
