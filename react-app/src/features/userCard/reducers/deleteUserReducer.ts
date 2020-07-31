import { PayloadAction } from '@reduxjs/toolkit';

import { UserState } from '../userSlice';

export const deleteUserReducer = (
  state: UserState,
  action: PayloadAction<string>
): void => {
  // const index = state.users.findIndex((user) => user.userId === action.payload);
  // state.users.splice(index, 1);
  // if (state.activeUserId === action.payload) {
  //   state.activeUserId = undefined;
  // }
};
