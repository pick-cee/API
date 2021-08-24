import { School } from 'src/School/school.entities';
export declare class Security {
    push(newSecurity: Security): void;
    id: string;
    email: string;
    password: string;
    school: School;
}
