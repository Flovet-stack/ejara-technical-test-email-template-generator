import { COMPONENT, Template } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditorState {
  selectedTemplate: Template | null;
  selectedComponent: COMPONENT | null;
}

const initialState: EditorState = {
  selectedTemplate: null,
  selectedComponent: null,
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setEditorState(state, { payload }: PayloadAction<EditorState>) {
      state.selectedTemplate = payload.selectedTemplate;
    },
    setSelectedComponent(state, { payload }: PayloadAction<COMPONENT>) {
      state.selectedComponent = payload;
    },
    setSelectedTemplate(state, { payload }: PayloadAction<Template>) {
      state.selectedTemplate = payload;
    },
  },
});

export const { setEditorState, setSelectedComponent, setSelectedTemplate } =
  editorSlice.actions;
export default editorSlice.reducer;
