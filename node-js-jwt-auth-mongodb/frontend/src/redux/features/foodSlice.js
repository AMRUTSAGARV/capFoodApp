import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createFood = createAsyncThunk(
  "food/createFood",
  async ({ updatedFoodData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createFood(updatedFoodData);
      toast.success("Food Added Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getFoods = createAsyncThunk(
  "food/getFoods",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getFoods();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const foodSlice = createSlice({
  name: "food",
  initialState: {
    food: {},
    foods: [],

    error: "",
    loading: false,
  },
  extraReducers: {
    [createFood.pending]: (state, action) => {
      state.loading = true;
    },
    [createFood.fulfilled]: (state, action) => {
      state.loading = false;
      state.foods = [action.payload];
    },
    [createFood.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getFoods.pending]: (state, action) => {
      state.loading = true;
    },
    [getFoods.fulfilled]: (state, action) => {
      state.loading = false;
      state.foods = action.payload;
    },
    [getFoods.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default foodSlice.reducer;
