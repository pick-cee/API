import { reportService } from './report.services';
import { Report } from './report.entities';
export declare class reportController {
    private readonly reportServices;
    constructor(reportServices: reportService);
    createReport(report: Report): Promise<any>;
    getAll(): Promise<Report[]>;
    update(id: any, reportData: Report): Promise<any>;
    delete(id: any): Promise<any>;
}
