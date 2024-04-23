import model from "../todo.model.js";

const editTodosServiceCore = async (id,data) => {
  try {
    const res = await model.findOneAndUpdate({_id:id},{$set:{...data}}, { new: true }
    );
    return res;
  } catch (error) {
    console.log("Todo core editTodosServiceCore",error);
  }
};
 
export default editTodosServiceCore