/**
 * Index Module for App Route
 */
import { Router } from 'express';


const router = Router();


/**
 * Home Dashboard Route
 */
router.get('/', (req, res, next) => {
    return res.status(200).json({
        msg: "Welcome on board"
    });
});
router.get('/dashboard', (req, res, next) => {
    return res.status(200).json({
        msg: "Welcome to our Dashboard"
    });
});

export default router;