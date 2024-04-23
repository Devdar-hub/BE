
import CreateTodoCore from "../core/create.js";
import fetchTodosCore from '../core/view.js'
import editTodosCore from '../core/edit.js';
import deleteTodosCore from '../core/delete.js'
import condition from "../todo.condition.js";

const CreateTodoService = async (Email) => {
  try {
    console.log("this is CreateTodoService", Email);
    const res = await CreateTodoCore(Email);
    return res;
  } catch (error) {
    console.log("User Service CreateTodoService", error);
  }
};




const fetchTodosService = async (filter) => {
  try {
    console.log("this is fetchTodosService",filter);
      var Condition = await condition(filter)
      console.log('this is conditon',Condition);
      var res = await fetchTodosCore(Condition);

    return res;
  } catch (error) {
    console.log("User Service fetchTodosService", error);
  }
};



const editTodosService = async (id,body) => {
  try {
    console.log("this is editTodosService");
    const res = await editTodosCore(id,body);
    return res;
  } catch (error) {
    console.log("User Service editTodosService", error);
  }
};


const deleteTodosService = async (id) => {
  try {
    console.log("this is deleteTodosService");
    const res = await deleteTodosCore(id);
    return res;
  } catch (error) {
    console.log("User Service deleteTodosService", error);
  }
};
export { CreateTodoService, fetchTodosService, editTodosService, deleteTodosService};
