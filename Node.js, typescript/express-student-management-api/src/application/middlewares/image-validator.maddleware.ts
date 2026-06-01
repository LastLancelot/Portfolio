import * as fs from 'fs';
import * as path from 'path';
import HttpException from '../exceptions/http-exception';
import { HttpStatuses } from '../enums/http-statuses.enums';
import { getStudentById } from '../../student/student.model';

export const imageValidator = (
  filePath: string,
  studentId: string,
): boolean => {
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  const fileExtension = path.extname(filePath).toLowerCase();
  if (!allowedExtensions.includes(fileExtension)) {
    throw new HttpException(
      HttpStatuses.BAD_REQUEST,
      'File use bad extention, try to use .jpg, .jpeg, .png, .gif',
    );
  }

  if (!fs.existsSync(filePath)) {
    throw new HttpException(HttpStatuses.BAD_REQUEST, 'File isn`t exist');
  }

  try {
    const imageInfo = fs.statSync(filePath);
    if (!imageInfo.isFile()) {
      throw new HttpException(HttpStatuses.BAD_REQUEST, 'File must be image');
    }
  } catch (error) {
    return false;
  }

  if (!getStudentById(studentId)) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }

  try {
    fs.readFileSync(filePath);
  } catch (error) {
    throw new HttpException(HttpStatuses.BAD_REQUEST, 'File is broken');
  }

  return true;
};
