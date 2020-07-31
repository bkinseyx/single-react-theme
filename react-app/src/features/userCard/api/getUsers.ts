import { store } from 'app/store';
import { promisifiedLiferayService, getGroupId } from 'app/utils/liferayUtils';
import {
  getUsersBegin,
  getUsersSuccess,
  getUsersFailure,
  User,
} from '../userSlice';

const dummyUserData: User[] = [
  {
    userId: '1',
    firstName: 'Ben',
    middleName: '',
    lastName: 'Kinsey',
  },
];

export const getUsers = async () => {
  if (process.env.NODE_ENV === 'development') {
    store.dispatch(getUsersSuccess(dummyUserData));
    return;
  }
  try {
    store.dispatch(getUsersBegin());
    const users = (await promisifiedLiferayService(
      '/user/get-group-users',
      {
        groupId: getGroupId(),
        // start: 1,
        // end: 2
      },
      'array'
    )) as User[];
    store.dispatch(getUsersSuccess(users));
  } catch (error) {
    store.dispatch(getUsersFailure(error));
  }
};
