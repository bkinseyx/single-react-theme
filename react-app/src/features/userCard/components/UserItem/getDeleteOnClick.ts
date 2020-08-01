import React from 'react';
import { store } from 'app/store';
import { deleteUser, User } from '../../userSlice';

export const getDeleteOnClick = (user: User) => (
  event: React.MouseEvent
): void => {
  /* istanbul ignore next */
  if (!user) {
    return;
  }
  store.dispatch(deleteUser(user));
  event.stopPropagation();
};
