import { Router } from 'express';
import * as pingController from '../controllers/ping';
import * as uploadController from '../controllers/upload';
import { upload as multerUpload } from '../libs/multer'; // ← Renomeie aqui!

export const mainRouter = Router();

mainRouter.get('/ping', pingController.ping);

mainRouter.post('/upload', multerUpload.single('arquivo'), uploadController.upload);
