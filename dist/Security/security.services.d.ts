import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Repository } from 'typeorm';
import { Security } from './security.entity';
export declare class securityServices {
    private usersRepository;
    private sec;
    constructor(usersRepository: Repository<Security>);
    createSec(security: any): Promise<Security>;
    getByEmail(email: string): Promise<Security>;
    findAll(): Promise<Security[]>;
    update(security: Security): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
