import { COMPONENT, EditorNodeType, Template } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditorState {
  selectedTemplate: Template | null;
  selectedComponent: COMPONENT | null;
  dnd: {
    nodes: EditorNodeType[];
  };
}

const tempNodes = [
  {
    id: "1",
    name: "Node 1",
  },
  {
    id: "2",
    name: "Node 2",
  },
  {
    id: "3",
    name: "Node 3",
  },
];

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
    },
    setSelectedComponent(state, { payload }: PayloadAction<COMPONENT>) {
      state.selectedComponent = payload;
    },
    setSelectedTemplate(state, { payload }: PayloadAction<Template>) {
      state.selectedTemplate = payload;
    },
    setNodes(state, { payload }: PayloadAction<EditorNodeType[]>) {
      state.dnd.nodes = payload;
    },
  },
});

export const {
  setEditorState,
  setSelectedComponent,
  setSelectedTemplate,
  setNodes,
} = editorSlice.actions;
export default editorSlice.reducer;
