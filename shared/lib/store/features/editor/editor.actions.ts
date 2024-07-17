import { EditorNodeType } from "@/shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createNodeThunk = createAsyncThunk(
  "createNode",
  async (data: EditorNodeType, { dispatch }) => {}
);
