import { NextFunction, Request, Response, response } from 'express';
import * as studentsService from './student.servise';
import HttpException from '../application/exceptions/http-exception';
import { HttpStatuses } from '../application/enums/http-statuses.enums';
import { IStudentUpdateRequest } from './types/student-update-request-schema';
import { IStudentCreateRequest } from './types/student-create-request-schema';
import { ValidatedRequest } from 'express-joi-validation';
import { imageValidator } from '../application/middlewares/image-validator.maddleware';

export const getAllStudent = (request: Request, response: Response) => {
  const students = studentsService.getAllStudent();
  response.status(200).json(students);
};

export const getStudentById = (
  request: Request<{ id: string }>,
  response: Response,
  next: NextFunction,
) => {
  const { id } = request.params;
  const student = studentsService.getStudentById(id);
  response.status(200).json(student);
};

export const createStudent = (
  request: ValidatedRequest<IStudentCreateRequest>,
  response: Response,
) => {
  const students = studentsService.createStudent(request.body);
  response.status(201).json(students);
};

export const updateStudentById = (
  request: ValidatedRequest<IStudentUpdateRequest>,
  response: Response,
) => {
  const { id } = request.params;
  const student = studentsService.updateStudentById(id, request.body);
  response.status(200).json(student);
};

export const addImage = (
  request: Request<{ id: string; file: Express.Multer.File }>,
  response: Response,
  next: NextFunction,
) => {
  const { id } = request.params;
  const { path } = request.file ?? {};
  try {
    if (!path) {
      throw new HttpException(HttpStatuses.BAD_REQUEST, 'File not provided');
    }
    imageValidator(path, id);

    const student = studentsService.addImage(id, path);
    response.status(200).json(student);
  } catch (error) {
    next(error);
  }
};

export const addGroupToStudent = (
  request: Request<{ id: string; groupId: string }>,
  response: Response,
) => {
  const { id } = request.params;
  const { groupId } = request.body;
  const student = studentsService.addGroupToStudent(id, groupId);
  response.status(200).json(student);
};

export const deleteStudentById = (request: Request, response: Response) => {
  const { id } = request.params;
  const student = studentsService.deleteStudentById(id);
  response.status(200).json(student);
};
