import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entities';
export declare class studentServices {
    private usersRepository;
    private student;
    constructor(usersRepository: Repository<Student>);
    createStudent(student: Student): Promise<Student>;
    getByEmail(email: string): Promise<Student>;
    findAll(): Promise<Student[]>;
    update(student: Student): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
