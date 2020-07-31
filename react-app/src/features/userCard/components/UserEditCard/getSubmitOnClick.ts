import { store } from 'app/store';
import { submitEditForm } from '../../userSlice';

export const getSubmitOnClick = (formData: any) => (): void => {
  store.dispatch(submitEditForm(formData));
};
