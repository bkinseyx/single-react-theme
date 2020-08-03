import { store } from 'app/store';
import { promisifiedLiferayService, getGroupId } from 'app/utils/liferayUtils';
import {
  getUserBegin,
  getUserSuccess,
  getUserFailure,
  User,
} from '../userSlice';

export const getUserApi = async (user: User) => {
  if (process.env.NODE_ENV === 'development') {
    store.dispatch(getUserSuccess(user));
    return;
  }
  try {
    const userDetails = await promisifiedLiferayService(
      '/user/get-user-by-id',
      { userId: user.userId },
      'object'
    );
    store.dispatch(getUserSuccess(user));
  } catch (error) {
    store.dispatch(getUserFailure(error));
  }
};

// promisifiedLiferayService(
//   "/role/get-roles",
//   { companyId: Liferay.ThemeDisplay.getCompanyId(), types: [1] },
//   "array"
// ),
// promisifiedLiferayService(
//   "/role/get-user-roles",
//   { userId },
//   "array"
// )