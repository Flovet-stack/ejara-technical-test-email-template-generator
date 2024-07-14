import { Template } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const tempTemplates: Template[] = [
  {
    id: "1",
    name: "E-commerce receipt and more info here",
  },
  {
    id: "2",
    name: "One-time password (OTP) ",
  },
  {
    id: "3",
    name: "Reset password",
  },
  {
    id: "4",
    name: "E-commerce receipt",
  },
];

interface TemplatesState {
  templates: Template[] | null;
}

const initialState: TemplatesState = {
  templates: tempTemplates,
};

const templatesSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    setTemplatesState(state, { payload }: PayloadAction<TemplatesState>) {
      state.templates = payload.templates;
    },
  },
});

export const { setTemplatesState } = templatesSlice.actions;
export default templatesSlice.reducer;
