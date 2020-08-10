import {
  User,
  deleteUserBegin,
  deleteUserSuccess,
  deleteUserFailure,
  deleteUser,
} from '../userSlice';
import { store } from 'app/store';
import {
  promisifiedLiferayService,
  executeLiferayService,
} from 'app/utils/liferayUtils';
import { getUsersApi } from './getUsersApi';

export const deleteUserApi = (user: User) => async () => {
  // if (process.env.NODE_ENV === 'development') {
  //   store.dispatch(deleteUser(user));
  //   return;
  // }
  try {
    store.dispatch(deleteUserBegin());
    await executeLiferayService(
      '/user/delete-user',
      {
        userId: user.userId,
      },
      'object'
    );
    store.dispatch(deleteUserSuccess());
    getUsersApi();
  } catch (error) {
    store.dispatch(deleteUserFailure(error));
  }
};
