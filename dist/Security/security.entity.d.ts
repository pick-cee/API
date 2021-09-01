import { School } from 'src/School/school.entities';
export declare class Security {
    id: string;
    email: string;
    password: string;
    hashPassword(): Promise<void>;
    school: School;
}
