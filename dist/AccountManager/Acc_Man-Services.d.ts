import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Repository } from 'typeorm';
import { AccManager } from './Acc_Man-entity';
export declare class AccManService {
    private usersRepository;
    private accMan;
    constructor(usersRepository: Repository<AccManager>);
    createaccMan(accMan: any): Promise<any>;
    getByEmail(email: string): Promise<AccManager>;
    findAll(): Promise<AccManager[]>;
    update(accMan: AccManager): Promise<UpdateResult>;
    delete(accMan_id: any): Promise<DeleteResult>;
}
