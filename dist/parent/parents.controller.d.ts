import { Parent } from './parent.entity';
import { parentService } from './parents.service';
export declare class ParentsController {
    private readonly parentsService;
    constructor(parentsService: parentService);
    addSecurity(parData: Parent): Promise<any>;
    getAll(): Promise<Parent[]>;
    update(id: any, parData: Parent): Promise<any>;
    removeParent(parent_id: string): any;
}
