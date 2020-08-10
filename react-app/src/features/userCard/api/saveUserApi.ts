import { store } from 'app/store';
import {
  promisifiedLiferayService,
  updateUserDummyData,
  createUserDummyData,
  getLiferayField,
  executeLiferayService,
} from 'app/utils/liferayUtils';
import {
  saveUserBegin,
  saveUserSuccess,
  saveUserFailure,
  User,
} from '../userSlice';
import { getUsersApi } from './getUsersApi';

export const saveUserApi = async (user: User) => {
  // if (process.env.NODE_ENV === 'development') {
  //   store.dispatch(saveUserSuccess());
  //   return;
  // }
  try {
    store.dispatch(saveUserBegin());
    await executeLiferayService(
      user.userId ? '/user/update-user' : '/user/add-user',
      {
        ...(user.userId ? updateUserDummyData : createUserDummyData), // is this the appropriate place to complain that the liferay api is ridiculous?
        companyId: await getLiferayField('companyId'),
        groupIds: [await getLiferayField('groupId')],
        ...user,
      },
      'object'
    );
    store.dispatch(saveUserSuccess());
    getUsersApi();
  } catch (error) {
    store.dispatch(saveUserFailure(error));
  }
};
