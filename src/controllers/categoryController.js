import{
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
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
    
}

export function updatedCategoryHandler(req,res){}

export function deleteCategoryHandler(req,res){}
