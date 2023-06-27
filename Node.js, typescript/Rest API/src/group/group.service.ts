import HttpException from '../application/exceptions/http-exception';
import * as groupsModel from './group.model';
import { IGroup } from './types/group.interface';
import { HttpStatuses } from '../application/enums/http-statuses.enums';
import { IStudent } from '../student/types/student.interface';
import { getStudentWithGroup } from '../student/student.model';
import { cloneGroup, groupWithStudent } from './types/group-with-student';

export const getAllGroup = () => {
  const groups = groupsModel.getAllGroup();
  const groupsWithStudents: groupWithStudent[] = [];
  let _students: IStudent[] = [];

  for (let i = 0; i < groups.length; i++) {
    _students = getStudentWithGroup(groups[i].id);
    if (!_students) {
      _students = [];
    }
    let _group: groupWithStudent = cloneGroup(groups[i], _students);

    groupsWithStudents.push(_group);
  }

  return groupsWithStudents;
};

export const getGroupById = (id: string) => {
  const group = groupsModel.getGroupById(id);

  if (!group) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Group not found');
  }

  const _students = getStudentWithGroup(group.id);
  const _group: groupWithStudent = cloneGroup(group, _students);

  return _group;
};

export const createGroup = (group: Omit<IGroup, 'id'>) => {
  return groupsModel.createGroup(group);
};

export const updateGroupById = (
  id: string,
  groupUpdateSchema: Partial<IGroup>,
) => {
  const group = groupsModel.updateGroupById(id, groupUpdateSchema);
  if (!groupsModel.getGroupById(id)) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Group not found');
  }

  return group;
};

export const deleteGroupById = (id: string) => {
  if (!groupsModel.getGroupById(id)) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Group not found');
  }
  return groupsModel.deleteGroupById(id);
};
