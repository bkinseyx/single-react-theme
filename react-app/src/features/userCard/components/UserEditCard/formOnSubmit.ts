import { User } from '../../userSlice';
import { saveUser } from 'features/userCard/api/saveUser';

export const formOnSubmit = ({ formData }: { formData: User }) => {
  console.log('submitted successfully');
  saveUser(formData);
};
