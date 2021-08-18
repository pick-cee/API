import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Repository } from 'typeorm';
import { School } from './school.entities';
export declare class schoolServices {
    private usersRepository;
    private school;
    constructor(usersRepository: Repository<School>);
    createSchool(school: School): Promise<School>;
    findAll(): Promise<School[]>;
    update(school: School): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
