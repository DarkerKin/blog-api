import { handleValidationErrors } from "./handleValidationErrors.js";
import { param,body } from "express-validator";

export const validateCategoryId = [
  param("id")
    .isInt({ min: 1 })
    .withMessage("Blog ID must be a positive integer"),
    handleValidationErrors
];

export const validateCategoryName = [
    body('name').trim().escape().notEmpty().withMessage('name is required').bail().isLength({min:3}).withMessage("name must be at least 3 characters"),
    handleValidationErrors
];