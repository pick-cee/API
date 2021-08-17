import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Parent } from './parent.entity';
export declare class parentService {
    private usersRepository;
    private parent;
    constructor(usersRepository: Repository<Parent>);
    createPar(parent: Parent): Promise<Parent>;
    findAll(): Promise<Parent[]>;
    update(parent: Parent): Promise<UpdateResult>;
    delete(parent_id: any): Promise<DeleteResult>;
}
