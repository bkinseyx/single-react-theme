import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/reduxDemo/reduxDemoSlice';

export const store = configureStore({
  reducer: {
    reduxDemo: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
