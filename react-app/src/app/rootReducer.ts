import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from '../features/reduxDemo/reduxDemoSlice';

export const rootReducer = combineReducers({
  reduxDemo: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
