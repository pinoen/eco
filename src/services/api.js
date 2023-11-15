// fn to get users data from API
import axios from "axios";

const apiUrl = "http://localhost:5000";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${apiUrl}/users`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// fn to get suppliers data from API
export const getSuppliers = async () => {
  try {
    const response = await axios.get(`${apiUrl}/suppliers`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
