import { parentService } from './parents.service';
export declare class ParentsController {
    private readonly parentsService;
    constructor(parentsService: parentService);
    addParents(parent_id: number, parent_name: string, parent_age: number, parent_pic: string, parent_num: number, parent_email: string, parent_address: string, parent_gender: string): {
        par: any;
    };
}
