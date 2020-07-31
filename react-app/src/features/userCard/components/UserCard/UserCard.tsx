import React from 'react';
import { useSelector } from 'react-redux';

import { TopLevelComponent } from 'app/utils/typeUtils';
import { editUserSelector } from '../../selectors/editUserSelector';
import { UserListCard } from '../UserListCard/UserListCard';
import { UserEditCard } from '../UserEditCard/UserEditCard';

interface UserCardProps {
  reactConfig?: {
    title?: string;
  };
}
export const UserCard: TopLevelComponent<UserCardProps> = ({ reactConfig }) => {
  const editUser = useSelector(editUserSelector);
  return editUser ? <UserEditCard /> : <UserListCard />;
};
export default UserCard;
