import { UpdateResult, DeleteResult, Repository } from 'typeorm';
import { Report } from './report.entities';
export declare class reportService {
    private usersRepository;
    private report;
    constructor(usersRepository: Repository<Report>);
    createReport(report: Report): Promise<Report>;
    findAll(): Promise<Report[]>;
    update(report: Report): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
