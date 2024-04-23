import bcrypt from "bcrypt";
import getUserCore from "../core/view.js";

const loginService = async (body) => {
  try {
    const user = await getUser(body?.email);
    console.log("this is service", user);
    if (!user) {
      return 'User not found';
      throw new Error("User not found");
    }
    const isPasswordMatch = await bcrypt.compare(body?.password, user?.password);
    if (!isPasswordMatch) {
      return 'Invalid password';
      throw new Error("Invalid password");
    }
    console.log("User logged in successfully");

    return true;
  } catch (error) {
    console.log("User Service loginService", error);
  }
};

const getUser = async (Email) => {
  try {
    console.log("this is getUser", Email);
    const res = await getUserCore(Email);
    return res;
  } catch (error) {
    console.log("User Service loginService", error);
  }
};
export default loginService;
