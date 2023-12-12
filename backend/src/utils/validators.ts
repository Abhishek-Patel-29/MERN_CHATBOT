import { body } from "express-validator";

const signupValidator = [
    body("name").notEmpty().withMessage("name is required"),
    body("email").trim().isEmail().notEmpty().withMessage("name is required"),
    body("password").trim().isLength({min:6}).notEmpty().withMessage("password should contain atleast 6 character"),
]