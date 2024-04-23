import {CreateTodoService, fetchTodosService, editTodosService, deleteTodosService} from '../todo/services/service.js';

const createTodo = async (req, res) => {
  try {
    console.log("req", req?.body);
    const response = await CreateTodoService(req?.body); // Use a different variable name (e.g., response) instead of `res`
    res.send({ data: response }); // Send response received from CreateTodoService
  } catch (error) {
    console.log("User CreateTodo controller error:", error);
    res.status(500).send({ error: "Internal Server Error" }); // Handle error and send appropriate response
  }
};



const fetchTodos = async (req, res) => {
  try {
    console.log("req", req?.query);
    const response = await fetchTodosService(req?.query); // Use a different variable name (e.g., response) instead of `res`
    res.send({ data: response }); // Send response received from fetchTodosService
  } catch (error) {
    console.log("User fetchTodos controller error:", error);
    res.status(500).send({ error: "Internal Server Error" }); // Handle error and send appropriate response
  }
};




const editTodos = async (req, res) => {
  try {
    console.log("req", req?.body, req?.params?.id);
    const response = await editTodosService(req?.params?.id, req?.body); // Use a different variable name (e.g., response) instead of `res`
    res.send({ data: response }); // Send response received from editTodosService
  } catch (error) {
    console.log("User editTodos controller error:", error);
    res.status(500).send({ error: "Internal Server Error" }); // Handle error and send appropriate response
  }
};




const deleteTodos = async (req, res) => {
  try {
    console.log("req", req?.params?.id);
    const response = await deleteTodosService(req?.params?.id); // Use a different variable name (e.g., response) instead of `res`
    res.send({ data: response }); // Send response received from deleteTodosService
  } catch (error) {
    console.log("User deleteTodos controller error:", error);
    res.status(500).send({ error: "Internal Server Error" }); // Handle error and send appropriate response
  }
};
export {createTodo, fetchTodos, editTodos, deleteTodos};
