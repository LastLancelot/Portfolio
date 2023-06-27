import { IStudent } from './types/student.interface';
import ObjectID from 'bson-objectid';

const students: IStudent[] = [
  {
    id: ObjectID().toHexString(),
    name: 'John',
    surname: 'Smith',
    age: 31,
    email: 'jahn.smith@email.com',
    groupId: 'none',
  },
  {
    id: ObjectID().toHexString(),
    name: 'Will',
    surname: 'Man',
    age: 23,
    email: 'will.man@email.com',
    groupId: 'none',
  },
];

export const getAllStudent = (): IStudent[] => {
  return students;
};

export const getStudentById = (studentId: string): IStudent | undefined => {
  return students.find(({ id }) => id === studentId);
};

export const createStudent = (
  createStudentSchema: Omit<IStudent, 'id'>,
): IStudent => {
  const newStudent = {
    ...createStudentSchema,
    id: ObjectID().toHexString(),
  };
  if (newStudent.groupId === undefined) {
    newStudent.groupId = 'none';
  }
  students.push(newStudent);
  return newStudent;
};

export const updateStudentById = (
  studentId: string,
  updateStudentSchema: Partial<IStudent>,
): IStudent | undefined => {
  const studentIndex = students.findIndex(({ id }) => id === studentId);
  const student = students[studentIndex];

  const updateStudent = {
    ...student,
    ...updateStudentSchema,
  };

  students.splice(studentIndex, 1, updateStudent);

  return updateStudent;
};

export const addGroupToStudent = (
  studentId: string,
  groupId: string,
): IStudent | undefined => {
  const studentIndex = students.findIndex(({ id }) => id === studentId);
  const student = students[studentIndex];
  student.groupId = groupId;

  students.splice(studentIndex, 1, student);

  return student;
};

export const deleteStudentById = (studentId: string): IStudent | undefined => {
  const studentIndex = students.findIndex(({ id }) => id === studentId);
  const student = students[studentIndex];

  if (!student) {
    return;
  }

  students.splice(studentIndex, 1);

  return student;
};

export const getStudentWithGroup = (groupID: string = 'none'): IStudent[] => {
  const studentsWithGroup: IStudent[] = [];
  students.forEach((student) => {
    if (student.groupId === groupID) {
      studentsWithGroup.push(student);
    }
  });
  return studentsWithGroup;
};
