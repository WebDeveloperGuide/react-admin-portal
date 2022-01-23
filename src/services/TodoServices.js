import axios from 'axios';

const getAllTodos = () => {
  return axios.get("todos");
};

const getDetailTodo = (id) => {
  return axios.get(`todos/${id}`);
};

const createTodo = (data) => {
  return axios.post("todos", data);
};

const updateTodo = (id, data) => {
  return axios.put(`todos/${id}`, data);
};

const changeStatus = (id, data) => {
  return axios.put(`todos/status/${id}`, data);
};

const removeTodo = id => {
  return axios.delete(`todos/${id}`);
};

const removeAll = () => {
  return axios.delete(`todos`);
};

const findByName = (task_name) => {
  return axios.get(`todos?task_name=${task_name}`);
};

const TodoServices = {
  getAllTodos,
  getDetailTodo,
  createTodo,
  updateTodo,
  changeStatus,
  removeTodo,
  removeAll,
  findByName
};

export default TodoServices;
