import express from "express"

import {
    getAllCategoriesHandler,
    getCategoryByIdHandler,
    createCategoryHandler,
    updatedCategoryHandler,
    deleteCategoryHandler
} from "../controllers/categoryController.js"

const categoryRouter = express.Router();

//this will give all the categories
categoryRouter.get('/',getAllCategoriesHandler);

//this will get category by id
categoryRouter.get('/:id',getCategoryByIdHandler);

//this will add a new category
categoryRouter.post('/',createCategoryHandler);

//this will update the category
categoryRouter.put('/:id',updatedCategoryHandler);

//this will delete the category
categoryRouter.delete('/:id',deleteCategoryHandler);

export default categoryRouter;