import {
  ComponentAttributeValues,
  EditorNodeType,
  Template,
} from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditorState {
  selectedTemplate: Template | null;
  selectedComponent: EditorNodeType | null;
  showPreview: boolean;
  showTest: boolean;
  dnd: {
    nodes: EditorNodeType[];
  };
}

const tempNodes: EditorNodeType[] = [];

const initialState: EditorState = {
  selectedTemplate: null,
  selectedComponent: null,
  showPreview: false,
  showTest: false,
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
    setShowPreview(state, { payload }: PayloadAction<boolean>) {
      state.showPreview = payload;
    },
    setShowTest(state, { payload }: PayloadAction<boolean>) {
      state.showTest = payload;
    },
    setEditorNodes(state, { payload }: PayloadAction<EditorNodeType[]>) {
      state.dnd.nodes = payload;
    },
    setSelectedComponentDataValue(
      state,
      {
        payload,
      }: PayloadAction<{ key: keyof ComponentAttributeValues; value: any }>
    ) {
      const { key, value } = payload;
      if (state.selectedComponent) {
        state.selectedComponent = {
          ...state.selectedComponent,
          data: {
            ...state.selectedComponent?.data,
            [key]: value,
          },
        };
      }
    },
    updateNodesOnAttributeChange(state) {
      const { selectedComponent, dnd } = state;
      const { nodes } = dnd;

      if (selectedComponent && nodes.length > 0) {
        const updatedNodes = nodes.map((node) =>
          node.id === selectedComponent.id
            ? { ...node, data: { ...selectedComponent.data } }
            : node
        );
        state.dnd.nodes = updatedNodes;
      }
    },
  },
});

export const {
  setEditorState,
  setSelectedComponent,
  setSelectedTemplate,
  setEditorNodes,
  setSelectedComponentDataValue,
  updateNodesOnAttributeChange,
  setShowPreview,
  setShowTest,
} = editorSlice.actions;
export default editorSlice.reducer;
