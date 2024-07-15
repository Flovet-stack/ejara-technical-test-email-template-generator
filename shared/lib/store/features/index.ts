import templatesReducer from "./templates/templates.slice";
export * from "./templates/templates.slice";
import defaultReducer from "./default/default";
export * from "./default/default";
import editorReducer from "./editor/editor.slice";
export * from "./editor/editor.slice";
import variablesReducer from "./variables/variables.slice";
export * from "./variables/variables.slice";

export { templatesReducer, defaultReducer, editorReducer, variablesReducer };
