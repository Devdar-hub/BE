import model from "../todo.model.js";

const deleteTodosCore = async (id) => {
  try {
    const res = await model.deleteOne({_id:id});
    return res;
  } catch (error) {
    console.log("Todo core deleteTodosCore",error);
  }
};
 
export default deleteTodosCore