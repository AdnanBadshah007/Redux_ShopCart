import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  err: "",
  isLoading: true,
};

export const getData = createAsyncThunk(
  "cart/products",
  async (name, thunkAPI) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Somthing Went Wrong");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  // reducers: {
  //   setProducts(state, action) {
  //     state.data = action.payload;
  //   },
  // },
  extraReducers: {
    [getData.pending]: (state) => {
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.data = action.payload;
    },
    [getData.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
  },
});

// export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
