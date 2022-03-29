import { configureStore } from "@reduxjs/toolkit";

import FoodReducer from "./features/foodSlice";
import RequestReducer from "./features/RequestSlice";

export default configureStore({
  reducer: {
    food: FoodReducer,
    meal: RequestReducer,
  },
});
