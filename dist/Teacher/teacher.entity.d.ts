import { Report } from 'src/Report-Card/report.entities';
import { School } from 'src/School/school.entities';
import { Student } from 'src/Student/student.entities';
export declare class Teacher {
    id: string;
    first_name: string;
    last_name: string;
    age: string;
    email: string;
    profile_pic: string;
    qualifications: string;
    address: string;
    other_docs: string;
    student: Student;
    school: School;
    report: Report;
}
