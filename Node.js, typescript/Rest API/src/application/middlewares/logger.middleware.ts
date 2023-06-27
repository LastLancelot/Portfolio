import { Request, Response, NextFunction } from 'express';

const logger = (request: Request, response: Response, next: NextFunction) => {
  const { url, method } = request;
  console.log(` >>> ${method} ${url}`);

  next();
};

export default logger;
