import { store } from 'app/store';
import { submitEditForm } from '../../userSlice';

export const formOnSubmit = ({ formData }: { formData: any }) => {
  store.dispatch(submitEditForm(formData));
};
