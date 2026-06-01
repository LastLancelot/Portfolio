import ObjectID from 'bson-objectid';
import { IGroup } from './types/group.interface';
import {
  addGroupToStudent,
  getStudentWithGroup,
} from '../student/student.model';
import { HttpStatuses } from '../application/enums/http-statuses.enums';
import HttpException from '../application/exceptions/http-exception';

const groups: IGroup[] = [
  {
    id: ObjectID().toHexString(),
    name: 'PMP22',
  },
  {
    id: ObjectID().toHexString(),
    name: 'PMP32',
  },
];

export const getAllGroup = (): IGroup[] => {
  return groups;
};

export const getGroupById = (groupId: string): IGroup | undefined => {
  return groups.find(({ id }) => id === groupId);
};

export const createGroup = (createGroupSchema: Omit<IGroup, 'id'>): IGroup => {
  const newGroup = {
    ...createGroupSchema,
    id: ObjectID().toHexString(),
  };
  groups.push(newGroup);
  return newGroup;
};

export const updateGroupById = (
  groupId: string,
  updateGroupSchema: Partial<IGroup>,
): IGroup | undefined => {
  const groupIndex = groups.findIndex(({ id }) => id === groupId);
  const group = groups[groupIndex];

  const updateGroup = {
    ...group,
    ...updateGroupSchema,
  };

  groups.splice(groupIndex, 1, updateGroup);

  return updateGroup;
};

export const deleteGroupById = (groupId: string): IGroup | undefined => {
  const groupIndex = groups.findIndex(({ id }) => id === groupId);
  const group = groups[groupIndex];

  if (!group) {
    return;
  }
  const students = getStudentWithGroup(groupId);
  students.forEach((student) => {
    addGroupToStudent(student.id, 'none');
  });

  groups.splice(groupIndex, 1);

  return group;
};

export const checkIsGroupExist = (groupId: string): IGroup => {
  const groupIndex = groups.findIndex(({ id }) => id === groupId);
  const group = groups[groupIndex];

  if (!group) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Group not found');
  }
  return group;
};
