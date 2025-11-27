import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, getProductById } from "../../services/productService";

export const fetchProducts = createAsyncThunk("products/fetchAll", async (_, { rejectWithValue }) => {
  try { return await getProducts(); } catch (err) { return rejectWithValue(err.message); }
});

export const fetchProductById = createAsyncThunk("products/fetchById", async (id, { rejectWithValue }) => {
  try { return await getProductById(id); } catch (err) { return rejectWithValue(err.message); }
});

const slice = createSlice({
  name: "products",
  initialState: { items: [], selected: null, status: "idle", error: null },
  reducers: {
    clearSelected(state) { state.selected = null; }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (s) => { s.status = "loading"; s.error = null; })
      .addCase(fetchProducts.fulfilled, (s, a) => { s.status = "succeeded"; s.items = a.payload; })
      .addCase(fetchProducts.rejected, (s, a) => { s.status = "failed"; s.error = a.payload || a.error.message; })

      .addCase(fetchProductById.pending, (s) => { s.status = "loading"; s.error = null; s.selected = null; })
      .addCase(fetchProductById.fulfilled, (s, a) => { s.status = "succeeded"; s.selected = a.payload; })
      .addCase(fetchProductById.rejected, (s, a) => { s.status = "failed"; s.error = a.payload || a.error.message; });
  }
});

export const { clearSelected } = slice.actions;
export default slice.reducer;
