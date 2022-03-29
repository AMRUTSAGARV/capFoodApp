import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const createFood = (foodData) => API.post("/food", foodData);
export const createMeal = (foodData) => API.post("/food", foodData);
export const getFoods = () => API.get("/food");
export const getMeals = () => API.get("/food");
