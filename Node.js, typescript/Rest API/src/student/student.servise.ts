import HttpException from '../application/exceptions/http-exception';
import * as studentsModel from './student.model';
import { IStudent } from './types/student.interface';
import { HttpStatuses } from '../application/enums/http-statuses.enums';
import ObjectID from 'bson-objectid';
import path from 'path';
import fs from 'fs/promises';
import { checkIsGroupExist } from '../group/group.model';
import { studentWithGroup, cloneStudent } from './types/student-with-group';
import { getGroupById } from '../group/group.model';

export const getAllStudent = () => {
  const students = studentsModel.getAllStudent();
  let groupId: string;
  let groupName: string | undefined;
  const _studentsWithGroup: studentWithGroup[] = [];
  let _student: studentWithGroup;
  for (let i = 0; i < students.length; i++) {
    groupName = getGroupById(students[i].groupId)?.name;
    if (groupName === undefined) {
      _student = cloneStudent(students[i], 'none');
    } else {
      _student = cloneStudent(students[i], groupName);
    }
    _studentsWithGroup.push(_student);
  }

  return _studentsWithGroup;
};

export const getStudentById = (id: string) => {
  const student = studentsModel.getStudentById(id);

  if (!student) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }
  let _student: studentWithGroup;
  const groupName = getGroupById(student.groupId)?.name;
  if (groupName === undefined) {
    _student = cloneStudent(student, 'none');
  } else {
    _student = cloneStudent(student, groupName);
  }
  return _student;
};

export const createStudent = (student: Omit<IStudent, 'id'>) => {
  return studentsModel.createStudent(student);
};

export const updateStudentById = (
  id: string,
  studentUpdateSchema: Partial<IStudent>,
) => {
  const student = studentsModel.updateStudentById(id, studentUpdateSchema);

  if (!studentsModel.getStudentById(id)) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }

  return student;
};

export const addImage = async (id: string, filePath?: string) => {
  if (!filePath) {
    throw new HttpException(HttpStatuses.BAD_REQUEST, 'File is not provided');
  }
  if (!studentsModel.getStudentById(id)) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }
  try {
    const imageId = ObjectID().toHexString();
    const imageExtention = path.extname(filePath);
    const imageName = imageId + imageExtention;

    const studentDirectoryName = 'students';
    const studentDirectoryPath = path.join(
      __dirname,
      '../',
      'public',
      studentDirectoryName,
    );

    const newImagePath = path.join(studentDirectoryPath, imageName);
    const imagePath = `${studentDirectoryName}/${imageName}`;

    await fs.rename(filePath, newImagePath);

    const updatedStudent = updateStudentById(id, { imagePath });

    return updatedStudent;
  } catch (error) {
    await fs.unlink(filePath);
    throw new HttpException(
      HttpStatuses.INTERNAL_SERVER_ERROR,
      'Something went wrong',
    );
  }
};

export const addGroupToStudent = (id: string, groupId: string) => {
  const group = checkIsGroupExist(groupId);
  if (!group) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Group not found');
  }
  const student = studentsModel.getStudentById(id);
  if (!student) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }

  const studentWithGroup = studentsModel.addGroupToStudent(id, groupId);

  return student;
};

export const deleteStudentById = (id: string) => {
  if (!studentsModel.getStudentById(id)) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }
  return studentsModel.deleteStudentById(id);
};
