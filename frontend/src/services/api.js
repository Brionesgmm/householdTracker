import axios from "axios";

const API_URL = "/api/items";

const getItems = () => axios.get(API_URL);
const createItem = (itemData) => axios.post(API_URL, itemData);
const updateItem = (id, itemData) => axios.put(`${API_URL}/${id}`, itemData);
const deleteItem = (id) => axios.delete(`${API_URL}/${id}`);
const resetItems = () => axios.post(`${API_URL}/reset`);

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem,
  resetItems,
};
