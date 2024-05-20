import { Router } from 'express'
import { refreshToken, signIn, signUp } from './auth.services.js';
import {use} from '../../utils/responses/api.use.js'

const router = Router()

router.post('/sign-up',use(signUp))
router.post('/sign-in', use(signIn))
router.post('/refresh', use(refreshToken))

export default router;