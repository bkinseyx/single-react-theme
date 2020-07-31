import { UserState } from '../userSlice';

export const cancelEditUserReducer = (state: UserState): void => {
  state.editUser = undefined;
};
