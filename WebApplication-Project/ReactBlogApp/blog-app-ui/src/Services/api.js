import axios from "axios";

const URL = "http://localhost:8080/api/blogs";

export const fetchBlogPosts = async () => {
  try {
    return await axios.get(URL);
  } catch (e) {
    console.error(e);
  }
};

export const createBlog = async (data) => {
  try {
    return await axios.post(URL, data);
  } catch (e) {
    console.error(e);
  }
};

export const fatchBlogById = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (e) {
    console.error(e);
  }
};

export const EditBlogById = async (id, data) => {
  try {
    return await axios.put(`${URL}/${id}`, data);
  } catch (e) {
    console.error(e);
  }
};

export const deleteBlogById = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (e) {
    console.error(e);
  }
};
