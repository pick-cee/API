import { School } from 'src/School/school.entities';
import { BaseEntity } from 'typeorm';
export declare class AccManager extends BaseEntity {
    find(_arg0: (accMan: any) => boolean): void;
    push(_newAccManager: AccManager): void;
    id: string;
    email: string;
    password: string;
    school_id: string;
    school: School;
}
