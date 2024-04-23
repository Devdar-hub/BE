import model from "../user.model.js";

const getUserCore = async (Email) => {
  try {
    const res = await model.findOne({ email: Email });
    return res;
  } catch (error) {
    console.log("User core getUser");
  }
};
 
export default getUserCore