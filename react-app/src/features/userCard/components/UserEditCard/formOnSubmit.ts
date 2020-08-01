import { store } from 'app/store';
import { submitEditForm } from '../../userSlice';

export const formOnSubmit = ({ formData }: { formData: any }) => {
  console.log('submitted successfully');
  store.dispatch(submitEditForm(formData));
};
