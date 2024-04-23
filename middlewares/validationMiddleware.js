import express from "express";
const router = express.Router();

// Custom middleware function for user validation
const validationMiddleware = (schema) => async (req, res, next) => {
  try {
    console.log("req", req?.body);

    await schema.validate(req.body, { abortEarly: false });

    next();
  } catch (error) {
    console.error("Validation error:", error.errors);
    res.status(400).json({ errors: error.errors });
  }
};

export default validationMiddleware;
