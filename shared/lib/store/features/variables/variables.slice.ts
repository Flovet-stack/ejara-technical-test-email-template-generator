import { EditorVariable } from "@/shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const tempVariables: EditorVariable[] = [];

interface VariablesState {
  variables: EditorVariable[];
  showForm: boolean;
}

const initialState: VariablesState = {
  variables: tempVariables,
  showForm: false,
};

const variablesSlice = createSlice({
  name: "variables",
  initialState,
  reducers: {
    setVariablesState(state, { payload }: PayloadAction<VariablesState>) {
      state.variables = payload.variables;
      state.showForm = payload.showForm;
    },
    addVariable(state, { payload }: PayloadAction<EditorVariable[]>) {
      state.variables = payload;
    },
    setShowCreateVariableForm(state, { payload }: PayloadAction<boolean>) {
      state.showForm = payload;
    },
  },
});

export const { setVariablesState, addVariable, setShowCreateVariableForm } =
  variablesSlice.actions;
export default variablesSlice.reducer;
