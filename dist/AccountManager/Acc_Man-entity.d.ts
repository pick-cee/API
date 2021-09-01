import { School } from 'src/School/school.entities';
import { BaseEntity } from 'typeorm';
export declare class AccManager extends BaseEntity {
    id: string;
    email: string;
    password: string;
    hashPassword(): Promise<void>;
    school: School;
}
