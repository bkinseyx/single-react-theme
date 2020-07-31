import { PayloadAction } from '@reduxjs/toolkit';

import { UserState, User } from '../userSlice';

export const getUsersSuccessReducer = (
  state: UserState,
  action: PayloadAction<User[]>
): void => {
  state.users = action.payload;
  state.loading = false;
};
