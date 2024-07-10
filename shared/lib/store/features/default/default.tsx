import { AppTheme } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DefaultsState {
  theme: AppTheme;
}

const initialState: DefaultsState = {
  theme: "light",
};

const defaultsSlice = createSlice({
  name: "defaults",
  initialState,
  reducers: {
    setDefaultsState(state, { payload }: PayloadAction<DefaultsState>) {
      state.theme = payload.theme;
    },
    setThemeState(state, { payload }: PayloadAction<AppTheme>) {
      state.theme = payload;
    },
  },
});

export const { setDefaultsState, setThemeState } = defaultsSlice.actions;
export default defaultsSlice.reducer;
