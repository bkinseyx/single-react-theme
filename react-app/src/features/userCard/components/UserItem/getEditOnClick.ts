import React from 'react';
import { store } from 'app/store';
import { deleteUser } from '../../userSlice';

export const getEditOnClick = (userId?: string) => (
  event: React.MouseEvent
): void => {
  /* istanbul ignore next */
  if (!userId) {
    return;
  }
  store.dispatch(deleteUser(userId));
  event.stopPropagation();
};
