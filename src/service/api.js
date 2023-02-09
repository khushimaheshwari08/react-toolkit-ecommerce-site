import axios from "axios";

const API_URL = "https://api.pujakaitem.com/api/products";

export const getProducts = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error while calling getUsers api ", error.message);
  }
};
