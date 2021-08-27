import { AccManager } from 'src/AccountManager/Acc_Man-entity';
import { Request } from 'express';

interface RequestWithUser extends Request {
  accMan: AccManager;
}

export default RequestWithUser;
