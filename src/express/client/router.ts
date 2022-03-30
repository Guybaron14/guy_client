import { Router } from 'express';
import { wrapController } from '../../utils/express';
import ValidateRequest from '../../utils/joi';
import * as UserController from './controller';
import { createUserRequestSchema, getUserRequestSchema, deleteUserRequestSchema } from './validator.schema';

const userRouter: Router = Router();

userRouter.get('/', ValidateRequest(getUserRequestSchema), wrapController(UserController.getUsers));

userRouter.post('/', ValidateRequest(createUserRequestSchema), wrapController(UserController.createUser));

userRouter.delete('/:id', ValidateRequest(deleteUserRequestSchema), wrapController(UserController.deleteUser));

export default userRouter;
