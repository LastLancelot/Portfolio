import { IStudent } from './student.interface';

export interface studentWithGroup extends IStudent {
  id: string;
  email: string;
  name: string;
  surname: string;
  age: number;
  groupId: string;
  imagePath?: string;
  groupName: string;
}

export const cloneStudent = (
  student: IStudent,
  _groupName: string,
): studentWithGroup => {
  const _student: studentWithGroup = {
    name: student.name,
    surname: student.surname,
    age: student.age,
    email: student.email,
    id: student.id,
    groupId: student.groupId,
    groupName: _groupName,
  };
  if (student.imagePath) {
    _student.imagePath = student.imagePath;
  }

  return _student;
};
