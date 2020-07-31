import { User } from '../userSlice';
// import { WithRequired, WithOptional } from 'app/utils/typeUtils';

// export type UserTemplateFields = 'firstName' | 'middleName' | 'lastName';

// export type EmptyProfile = WithRequired<User, UserTemplateFields>;

export const emptyUser: User = {
  userId: '',
  firstName: '',
  middleName: '',
  lastName: '',
};

// export type PartialUser = WithOptional<
//   Omit<User, 'userId'>,
//   UserTemplateFields
// >;
