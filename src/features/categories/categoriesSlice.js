import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../../services/categoryService";

export const fetchCategories = createAsyncThunk("categories/fetchAll", async (_, { rejectWithValue }) => {
  try { return await getCategories(); } catch (err) { return rejectWithValue(err.message); }
});

const slice = createSlice({
  name: "categories",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (s) => { s.status = "loading"; s.error = null; })
      .addCase(fetchCategories.fulfilled, (s, a) => { s.status = "succeeded"; s.items = a.payload; })
      .addCase(fetchCategories.rejected, (s, a) => { s.status = "failed"; s.error = a.payload || a.error.message; });
  }
});

export default slice.reducer;
