import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { templatesReducer } from "./features";

export const store = configureStore({
  reducer: {
    templates: templatesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const makeStore = () =>
  configureStore({
    reducer: {
      templates: templatesReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
