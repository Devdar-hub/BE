import loginService from '../user/services/service.js';

const login = async (req, res) => {
  try {
    console.log("req", req?.body);
    const response = await loginService(req?.body); // Use a different variable name (e.g., response) instead of `res`
    if(response != true){
      res.status(400).send({ data: response });  
    }
    else{
      res.send({ data: response });
    }
  } catch (error) {
    console.log("User Login controller error:", error);
    res.status(500).send({ error: "Internal Server Error" }); // Handle error and send appropriate response
  }
};

export default login;
