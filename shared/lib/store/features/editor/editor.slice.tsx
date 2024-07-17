import { COMPONENT, EditorNodeType, Template } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditorState {
  selectedTemplate: Template | null;
  selectedComponent: EditorNodeType | null;
  dnd: {
    nodes: EditorNodeType[];
  };
}

const tempNodes: EditorNodeType[] = [];

const initialState: EditorState = {
  selectedTemplate: null,
  selectedComponent: null,
  dnd: {
    nodes: tempNodes,
  },
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setEditorState(state, { payload }: PayloadAction<EditorState>) {
      state.selectedTemplate = payload.selectedTemplate;
      state.selectedComponent = payload.selectedComponent;
      state.dnd = payload.dnd;
    },
    setSelectedComponent(state, { payload }: PayloadAction<EditorNodeType>) {
      state.selectedComponent = payload;
    },
    setSelectedTemplate(state, { payload }: PayloadAction<Template>) {
      state.selectedTemplate = payload;
    },
    setEditorNodes(state, { payload }: PayloadAction<EditorNodeType[]>) {
      state.dnd.nodes = payload;
    },
  },
});

export const {
  setEditorState,
  setSelectedComponent,
  setSelectedTemplate,
  setEditorNodes,
} = editorSlice.actions;
export default editorSlice.reducer;
