import { IStudent } from '../../student/types/student.interface';
import { IGroup } from './group.interface';

export interface groupWithStudent extends IGroup {
  id: string;
  name: string;
  students: IStudent[];
}

export const cloneGroup = (group: IGroup, _students: IStudent[]) => {
  const _group: groupWithStudent = {
    id: group.id,
    name: group.name,
    students: _students,
  };
  return _group;
};
