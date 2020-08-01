import React from 'react';
import { User } from '../../userSlice';
import { getUser } from 'features/userCard/api/getUser';

export const getEditOnClick = (user?: User) => (
  event: React.MouseEvent
): void => {
  /* istanbul ignore next */
  if (!user) {
    return;
  }
  getUser(user);
  event.stopPropagation();
};
