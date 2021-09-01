import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { Repository } from 'typeorm';
import { Nurse } from './nurse.entities';
export declare class nurseServices {
    private usersRepository;
    private nurse;
    constructor(usersRepository: Repository<Nurse>);
    createNurse(nurse: any): Promise<Nurse>;
    getByEmail(email: string): Promise<Nurse>;
    findAll(): Promise<Nurse[]>;
    update(nurse: Nurse): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
