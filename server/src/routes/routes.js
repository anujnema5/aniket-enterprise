import { Router } from 'express';
import submitRoutes from './user/data.controllers.js'
import authRoutes from './auth/auth.controllers.js'

const router = Router()

router.use('/leads', submitRoutes)
router.use('/auth', authRoutes)

export default router;