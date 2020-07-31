import { RootState } from 'app/rootReducer';

export const showListSelector = (state: RootState): boolean =>
  !!state.user.editUser;
