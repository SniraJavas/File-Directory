/** source/routes/directory.ts */
import express from 'express';
import controller from '../controllers/directory';
const router = express.Router();

router.get('/directories', controller.getDirectories);
// router.get('/directory/:id', controller.getDirectory);

export = router;