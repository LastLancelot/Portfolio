import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/http-exception';
import { HttpStatuses } from '../enums/http-statuses.enums';

const exceptionFilter = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const status = error.status || HttpStatuses.INTERNAL_SERVER_ERROR;
  const message = error.message || 'Sothing went wrong';
  response.status(status).send({ status, message });
};

export default exceptionFilter;
