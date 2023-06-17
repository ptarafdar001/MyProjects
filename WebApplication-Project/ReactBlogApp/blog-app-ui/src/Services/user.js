import axios from "axios";

const URL = "http://localhost:8080/api/users";

export const createUser = async (data) => {
  try {
    await axios.post(URL, data);
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(URL);
  } catch (e) {
    console.error(e);
  }
};
