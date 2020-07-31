import { UserState } from '../userSlice';
import { emptyUser } from '../helpers/userTemplate';

export const resetEditFormReducer = (state: UserState): void => {
  console.log('here');
  state.editForm.data = state.editForm.data?.userId
    ? state?.users.find((u) => u.userId === state?.editUser?.userId) ??
      emptyUser
    : emptyUser;
};
