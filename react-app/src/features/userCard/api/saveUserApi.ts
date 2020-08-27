import { store } from 'app/store';
import {
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
    const userObj = user.userId
      ? {
          ...updateUserDummyData, // is this the appropriate place to complain that the liferay api is ridiculous?
          companyId: await getLiferayField('companyId'),
          groupIds: [await getLiferayField('groupId')],
          ...user,
        }
      : {
          ...createUserDummyData, // is this the appropriate place to complain that the liferay api is ridiculous?
          companyId: await getLiferayField('companyId'),
          groupIds: [await getLiferayField('groupId')],
          ...user,
        };

    await executeLiferayService(
      user.userId ? '/user/update-user' : '/user/add-user',
      userObj,
      'object'
    );
    store.dispatch(saveUserSuccess());
    getUsersApi();
  } catch (error) {
    store.dispatch(saveUserFailure(error));
  }
};
