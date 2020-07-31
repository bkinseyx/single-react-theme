import { UserState } from '../userSlice';
import { emptyUser } from '../helpers/userTemplate';

export const createUserReducer = (state: UserState): void => {
  state.editUser = emptyUser;
};
