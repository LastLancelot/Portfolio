import { Router } from 'express';
import * as studentsController from './student.controller';
import controllerWrapper from '../application/utilities/controller-wrapper';
import validator from '../application/middlewares/validation.middleware';
import { studentCreateSchema, studentUpdateSchema } from './student.schema';
import { idParamSchema } from '../application/schemas/id-param-schema';
import uploadMiddleware from '../application/middlewares/upload.middleware';

const studentRouter = Router();

studentRouter.get('/', controllerWrapper(studentsController.getAllStudent));
studentRouter.get(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(studentsController.getStudentById),
);
studentRouter.post(
  '/',
  validator.body(studentCreateSchema),
  controllerWrapper(studentsController.createStudent),
);
studentRouter.patch(
  '/:id',
  validator.params(idParamSchema),
  validator.body(studentUpdateSchema),
  controllerWrapper(studentsController.updateStudentById),
);
studentRouter.patch(
  '/:id/image',
  uploadMiddleware.single('file'),
  validator.params(idParamSchema),
  controllerWrapper(studentsController.addImage),
);
studentRouter.patch(
  '/:id/group',
  validator.params(idParamSchema),
  controllerWrapper(studentsController.addGroupToStudent),
);
studentRouter.delete(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(studentsController.deleteStudentById),
);

export default studentRouter;
