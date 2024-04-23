import model from "../todo.model.js";

const fetchTodosCore = async (condition) => {
  try {
    const res = await model.find(condition);
    return res;
  } catch (error) {
    console.log("User core fetchTodosCore",error);
  }
};
 
export default fetchTodosCore