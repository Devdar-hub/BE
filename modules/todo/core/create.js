import model from "../todo.model.js";

const CreateTodoCore = async (data) => {
  try {
    const res = await model.create(data);
    return res;
  } catch (error) {
    console.log("Todo core CreateTodoCore",error);
  }
};
 
export default CreateTodoCore