import { Template } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TemplatesState {
  templates: Template[] | null;
}

const initialState: TemplatesState = {
  templates: null,
};

const templatesSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    TemplatesState(state, { payload }: PayloadAction<TemplatesState>) {
      state.templates = payload.templates;
    },
  },
});

export const { TemplatesState } = templatesSlice.actions;
export default templatesSlice.reducer;
