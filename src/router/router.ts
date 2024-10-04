import { Router } from "express";
import productRoute from './routeProduto';

const router = Router();

router.use('/produtos', productRoute);

export default router;