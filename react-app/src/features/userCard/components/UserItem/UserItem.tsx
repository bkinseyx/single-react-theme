import React from 'react';

import { User } from 'features/userCard/userSlice';
import { emptyUser } from 'features/userCard/helpers/userTemplate';
import { getDeleteOnClick } from './getDeleteOnClick';
import { getEditOnClick } from './getEditOnClick';

interface UserProps {
  user: User;
}

export const UserItem: React.FC<UserProps> = ({ user = emptyUser }) => (
  <li className="list-group-item">
    <div>
      Name: {user.firstName} {user.lastName}
    </div>
    <button className="btn btn-primary" onClick={getEditOnClick(user.userId)}>
      Edit
    </button>
    <button className="btn btn-danger" onClick={getDeleteOnClick(user.userId)}>
      Delete
    </button>
  </li>
);
