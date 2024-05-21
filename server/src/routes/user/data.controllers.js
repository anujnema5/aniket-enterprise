import { Router } from 'express';
import { deleteAllLeads, getAllLeads, submitService } from './data.services.js';
import { use } from '../../utils/responses/api.use.js';
import { verifyAdmin } from '../../middlewares/verfication.middleware.js';

const router = Router()

router.post('/', use(submitService))
router.get('/', use(verifyAdmin), use(getAllLeads))
router.delete('/', use(verifyAdmin), use(deleteAllLeads))



export default router;