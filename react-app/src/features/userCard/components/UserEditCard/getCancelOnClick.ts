import { store } from 'app/store';
import { submitEditForm } from '../../userSlice';

export const getCancelOnClick = (formData: any) => (): void => {
  store.dispatch(submitEditForm(formData));
};
