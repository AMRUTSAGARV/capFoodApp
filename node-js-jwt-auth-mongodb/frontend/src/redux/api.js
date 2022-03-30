import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const createFood = (foodData) => API.post("/food", foodData);
export const createHello = (helloData) => API.post("/hello", helloData);
export const getFoods = () => API.get("/food");
export const getHellos = () => API.get("/hello");
