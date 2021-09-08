import { AccManager } from 'src/AccountManager/Acc_Man-entity';
import { Request } from 'express';
import { Nurse } from 'src/Nurse/nurse.entities';
import { Parent } from 'src/parent/parent.entity';
import { School } from 'src/School/school.entities';
import { Security } from 'src/Security/security.entity';
import { Student } from 'src/Student/student.entities';
import { Teacher } from 'src/Teacher/teacher.entity';
import { User } from 'src/User/user.entity';

interface RequestWithUser extends Request {
  accMan: AccManager;
  nurse: Nurse;
  parent: Parent;
  school: School;
  security: Security;
  student: Student;
  teacher: Teacher;
  user: User;
}

export default RequestWithUser;
