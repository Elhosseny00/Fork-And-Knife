import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPopularProduct = createAsyncThunk(
  "popularProduct/fetchPopularProduct",
  async () => {
    const response = await axios.get("/popular.json");
    return response.data;
  }
);
export const fetchShopProduct = createAsyncThunk(
  "shopProduct/fetchShopProduct",
  async () => {
    const response = await axios.get("/shop.json");
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "popularProducts",
  initialState: {
    homeProduct: [],
    shopProduct: [],
    homeStatus: "idle",
    shopStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularProduct.pending, (state) => {
        state.homeStatus = "loading";
      })
      .addCase(fetchPopularProduct.fulfilled, (state, action) => {
        state.homeStatus = "succeeded";
        state.homeProduct = action.payload;
      })
      .addCase(fetchPopularProduct.rejected, (state, action) => {
        state.homeStatus = "failed";
        state.homeProduct = action.error.message;
      })
      .addCase(fetchShopProduct.pending, (state) => {
        state.shopStatus = "loading";
      })
      .addCase(fetchShopProduct.fulfilled, (state, action) => {
        state.shopStatus = "succeeded";
        state.shopProduct = action.payload;
      })
      .addCase(fetchShopProduct.rejected, (state, action) => {
        state.shopStatus = "failed";
        state.shopProduct = action.error.message;
      });
  },
});

export default productsSlice.reducer;
