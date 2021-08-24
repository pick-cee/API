import { AccManager } from 'src/AccountManager/Acc_Man-entity';
import { Nurse } from 'src/Nurse/nurse.entities';
import { Security } from 'src/Security/security.entity';
import { Student } from 'src/Student/student.entities';
import { Teacher } from 'src/Teacher/teacher.entity';
export declare class School {
    id: string;
    login_name: string;
    password: string;
    name_of_school: string;
    logo: string;
    social_media: string;
    student: Student;
    teacher: Teacher;
    accMan: AccManager;
    nurse: Nurse;
    security: Security;
}
