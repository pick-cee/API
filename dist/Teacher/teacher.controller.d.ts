import { Teacher } from './teacher.entity';
import { teacherServices } from './teacher.services';
export declare class teacherController {
    private readonly teacherService;
    constructor(teacherService: teacherServices);
    addTeacher(teacherData: Teacher): Promise<any>;
    getSingleTeacher(teacher_email: string): Promise<Teacher>;
    getAll(): Promise<Teacher[]>;
    update(id: any, teacherData: Teacher): Promise<any>;
    delete(id: any): Promise<any>;
}
