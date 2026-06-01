import { Router } from 'express';
import * as groupsController from './group.controller';
import controllerWrapper from '../application/utilities/controller-wrapper';
import validator from '../application/middlewares/validation.middleware';
import { groupCreateSchema, groupUpdateSchema } from './group.schema';
import { idParamSchema } from '../application/schemas/id-param-schema';

const groupsRouter = Router();

groupsRouter.get('/', controllerWrapper(groupsController.getAllGroup));
groupsRouter.get(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(groupsController.getGroupById),
);
groupsRouter.post(
  '/',
  validator.body(groupCreateSchema),
  controllerWrapper(groupsController.createGroup),
);
groupsRouter.patch(
  '/:id',
  validator.params(idParamSchema),
  validator.body(groupUpdateSchema),
  controllerWrapper(groupsController.updateGroupById),
);
groupsRouter.delete(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(groupsController.deleteGroupById),
);

export default groupsRouter;
