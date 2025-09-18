import express from "express"

import {
    getAllCategoriesHandler,
    getCategoryByIdHandler,
    createCategoryHandler,
    updatedCategoryHandler,
    deleteCategoryHandler
} from "../controllers/categoryController.js"
import { validateCategoryId, validateCategoryName } from "../middleware/categoryValidators.js";

const categoryRouter = express.Router();

//this will give all the categories
categoryRouter.get('/',getAllCategoriesHandler);

//this will get category by id
categoryRouter.get('/:id', validateCategoryId , getCategoryByIdHandler);

//this will add a new category
categoryRouter.post('/', validateCategoryName, createCategoryHandler);

//this will update the category
categoryRouter.put('/:id', validateCategoryId, validateCategoryName, updatedCategoryHandler);

//this will delete the category
categoryRouter.delete('/:id', validateCategoryId , deleteCategoryHandler);

export default categoryRouter;