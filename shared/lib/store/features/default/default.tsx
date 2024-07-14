import { AppTheme, EDITOR } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DefaultsState {
  theme: AppTheme;
  leftEditorMenu: EDITOR | null;
  rightEditorMenu: EDITOR | null;
}

const initialState: DefaultsState = {
  theme: "light",
  leftEditorMenu: EDITOR.TEMPLATES_MENU,
  rightEditorMenu: EDITOR.EDITOR_DETAILS_MENU,
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
    setLeftEditorMenuState(state, { payload }: PayloadAction<EDITOR>) {
      state.leftEditorMenu = payload;
    },
    setRightEditorMenuState(state, { payload }: PayloadAction<EDITOR>) {
      state.rightEditorMenu = payload;
    },
  },
});

export const {
  setDefaultsState,
  setThemeState,
  setLeftEditorMenuState,
  setRightEditorMenuState,
} = defaultsSlice.actions;
export default defaultsSlice.reducer;
