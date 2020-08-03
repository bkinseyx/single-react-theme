import { PayloadAction } from '@reduxjs/toolkit';

import { UserState, User } from '../userSlice';

export const deleteUserSuccessReducer = (state: UserState): void => {
  state.deleting = false;
};
