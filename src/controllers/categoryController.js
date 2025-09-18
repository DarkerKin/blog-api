
import{
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
}from "../services/categoryService.js"

//handles and send query to service
export function getAllCategoriesHandler(req,res){
    let query = req.query;
    let result = getAllCategories(query);
    res.status(200).json(result);
}

//it returns the category if the id is found 
//and sends error message when it does not find category with that id
export function getCategoryByIdHandler(req,res){
    let id = parseInt(req.params.id)
    let categoryRequestedByUser = getCategoryById(id);
    if(categoryRequestedByUser.error){
        res.status(categoryRequestedByUser.status).json({'error':categoryRequestedByUser.error})
    }else{
        res.status(200).json(categoryRequestedByUser);
    }
}

//returns the new category that is created 
export function createCategoryHandler(req,res){
    let data = req.body;
    const newCategory = createCategory(data);
    res.status(201).json(newCategory);
}

export function updatedCategoryHandler(req,res){
    let id = parseInt(req.params.id);
    let updates = req.body;
    let updatedCategory = updateCategory(id,updates)
    if(!updatedCategory.error){
        res.status(200).json(updatedCategory);
    }
    else{
        res.status(updatedCategory.status).json({error:updatedCategory.error});
    }
}

export function deleteCategoryHandler(req,res){
    let id = parseInt(req.params.id);
    const result = deleteCategory(id);
    if(result.error){
        res.status(result.status).json({error:result.error});
    }else res.status(204).json();
}
