import { Router } from 'express';

import { register } from '../controllers/auth.controller';

const authRoutes = Router();

// prefix: /auth

authRoutes.post('/register', register);

export default authRoutes;
