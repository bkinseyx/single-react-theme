import { PayloadAction } from '@reduxjs/toolkit';

import { UserState, User } from '../userSlice';

export const editUserReducer = (
  state: UserState,
  action: PayloadAction<User>
): void => {
  state.editUser = action.payload;
};
