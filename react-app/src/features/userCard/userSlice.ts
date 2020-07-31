import { createSlice } from '@reduxjs/toolkit';

import { createUserReducer } from './reducers/createUserReducer';
import { deleteUserReducer } from './reducers/deleteUserReducer';
import { updateUserReducer } from './reducers/updateUserReducer';
import { editUserReducer } from './reducers/setEditUserReducer';
import { getUsersBeginReducer } from './reducers/getUsersBeginReducer';
import { getUsersSuccessReducer } from './reducers/getUsersSuccessReducer';
import { getUsersFailureReducer } from './reducers/getUsersFailureReducer';
import { submitEditFormReducer } from './reducers/submitEditFormReducer';

import { resetReducer } from './reducers/resetReducer';
import { setFormDataReducer } from './reducers/setFormData';

export interface User {
  userId: string;
  firstName: string;
  middleName: string;
  lastName: string;
}

const schema = {
  type: 'object',
  required: ['firstName', 'lastName', 'screenName', 'emailAddress'],
  properties: {
    firstName: {
      type: 'string',
      title: 'First Name',
    },
    lastName: {
      type: 'string',
      title: 'Last Name',
    },
    screenName: {
      type: 'string',
      title: 'Screen Name',
    },
    emailAddress: {
      type: 'string',
      title: 'Email Address',
    },
    newPassword1: {
      type: 'string',
      title: 'Change Password',
    },
    newPassword2: {
      type: 'string',
      title: 'Confirm Change Password',
    },
  },
};

const uiSchema = {
  firstName: {
    'ui:autofocus': true,
  },
  newPassword1: {
    'ui:widget': 'password',
  },
  newPassword2: {
    'ui:widget': 'password',
  },
};

export interface UserEditForm {
  key: number;
  data: {};
  serverError: null;
  serverSuccessMessage: null;
  submitting: false;
  schema: {};
  uiSchema: {};
}

export interface UserState {
  users: User[];
  editUser?: User;
  loading: boolean;
  error: string;
  editForm: UserEditForm;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: '',
  editForm: {
    key: Date.now(),
    data: {},
    serverError: null,
    serverSuccessMessage: null,
    submitting: false,
    schema,
    uiSchema,
  },
};

export const userSlice = createSlice({
  name: 'User',
  initialState: initialState as UserState,
  reducers: {
    createUser: createUserReducer,
    deleteUser: deleteUserReducer,
    updateUser: updateUserReducer,
    editUser: editUserReducer,
    getUsersBegin: getUsersBeginReducer,
    getUsersSuccess: getUsersSuccessReducer,
    getUsersFailure: getUsersFailureReducer,
    submitEditForm: submitEditFormReducer,
    setFormData: setFormDataReducer,
    reset: resetReducer,
  },
});

export const {
  createUser,
  deleteUser,
  updateUser,
  editUser,
  getUsersBegin,
  getUsersSuccess,
  getUsersFailure,
  submitEditForm,
  setFormData,
  reset,
} = userSlice.actions;

export default userSlice.reducer;
