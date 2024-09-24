import { google, signin, signOut, signup } from '../controllers/auth.controllers.js';
import express from 'express';
const router = express.Router();

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/google', google)
router.get('/signout', signOut)

export default router;