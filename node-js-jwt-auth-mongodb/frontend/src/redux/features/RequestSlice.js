import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createHello = createAsyncThunk(
  "hello/createHello",
  async ({ updatedHelloData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createHello(updatedHelloData);
      toast.success("Food requested Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getHellos = createAsyncThunk(
  "hello/getHellos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getHellos();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const RequestSlice = createSlice({
  name: "hello",
  initialState: {
    hello: {},
    hellos: [],
    userhellos: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [createHello.pending]: (state, action) => {
      state.loading = true;
    },
    [createHello.fulfilled]: (state, action) => {
      state.loading = false;
      state.hellos = [action.payload];
    },
    [createHello.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getHellos.pending]: (state, action) => {
      state.loading = true;
    },
    [getHellos.fulfilled]: (state, action) => {
      state.loading = false;
      state.hellos = action.payload;
    },
    [getHellos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default RequestSlice.reducer;
