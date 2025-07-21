import { Router } from 'express';
import * as controller from '../controllers/productController';
import { requireAuth } from '../middlewares/auth';

const router = Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', requireAuth, controller.create);
router.put('/:id', requireAuth, controller.update);
router.delete('/:id', requireAuth, controller.remove);

export default router;
