import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createMeal = createAsyncThunk(
  "meal/createMeal",
  async ({ updatedFoodData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createMeal(updatedFoodData);
      toast.success("Food Added Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getMeals = createAsyncThunk(
  "food/getMeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getMeals();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const RequestSlice = createSlice({
  name: "meal",
  initialState: {
    food: {},
    foods: [],
    userfoods: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [createMeal.pending]: (state, action) => {
      state.loading = true;
    },
    [createMeal.fulfilled]: (state, action) => {
      state.loading = false;
      state.foods = [action.payload];
    },
    [createMeal.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getMeals.pending]: (state, action) => {
      state.loading = true;
    },
    [getMeals.fulfilled]: (state, action) => {
      state.loading = false;
      state.foods = action.payload;
    },
    [getMeals.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default RequestSlice.reducer;
