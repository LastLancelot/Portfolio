import { NextFunction, Request, Response } from 'express';
import * as groupsService from './group.service';
import { IGroupCreateRequest } from './types/group-create-request-schema';
import { IGroupUpdateRequest } from './types/group-update-request-schema';
import { ValidatedRequest } from 'express-joi-validation';

export const getAllGroup = (request: Request, response: Response) => {
  const groups = groupsService.getAllGroup();
  response.status(200).json(groups);
};

export const getGroupById = (
  request: Request<{ id: string }>,
  response: Response,
  next: NextFunction,
) => {
  const { id } = request.params;
  const group = groupsService.getGroupById(id);
  response.status(200).json(group);
};

export const createGroup = (
  request: ValidatedRequest<IGroupCreateRequest>,
  response: Response,
) => {
  const groups = groupsService.createGroup(request.body);
  response.status(201).json(groups);
};

export const updateGroupById = (
  request: ValidatedRequest<IGroupUpdateRequest>,
  response: Response,
) => {
  const { id } = request.params;
  const group = groupsService.updateGroupById(id, request.body);
  response.status(200).json(group);
};

export const deleteGroupById = (request: Request, response: Response) => {
  const { id } = request.params;
  const group = groupsService.deleteGroupById(id);
  response.status(200).json(group);
};
