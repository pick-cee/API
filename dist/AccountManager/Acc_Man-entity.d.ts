import { School } from '../School/school.entities';
import { BaseEntity } from 'typeorm';
export declare class AccManager extends BaseEntity {
    id: string;
    email: string;
    password: string;
    hashPassword(): Promise<void>;
    profile_pic: string;
    school: School;
}
