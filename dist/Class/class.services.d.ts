import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Repository } from 'typeorm';
import { Class } from './class.entity';
export declare class classServices {
    private usersRepository;
    private class;
    constructor(usersRepository: Repository<Class>);
    createClass(class1: Class): Promise<Class>;
    findAll(): Promise<Class[]>;
    update(class1: Class): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
