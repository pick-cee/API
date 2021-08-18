import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './teacher.entity';
export declare class teacherServices {
    private usersRepository;
    private teacher;
    constructor(usersRepository: Repository<Teacher>);
    createTeacher(teacher: Teacher): Promise<Teacher>;
    findAll(): Promise<Teacher[]>;
    update(teacher: Teacher): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
