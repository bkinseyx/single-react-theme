import { PayloadAction } from '@reduxjs/toolkit';

import { UserState, User } from '../userSlice';

export const submitEditFormReducer = (
  state: UserState,
  action: PayloadAction<User>
): void => {
  console.log('update user reducer');
};
