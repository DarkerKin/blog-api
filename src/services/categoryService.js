import {
    getCategoriesFromDB,
    getCategoryByIdFromDB,
    createCategoryInDB,
    updateCategoryInDB,
    deleteCategoryInDB
} from "../repositories/categoryRepo.js"

//gets sends the query to repo
export function getAllCategories(query){
    return getCategoriesFromDB(query);
}

export function getCategoryById(id){
    let categoryRequestedByUser = getCategoryByIdFromDB(id);
    if(categoryRequestedByUser){
        return categoryRequestedByUser;
    }
    return {'error':`cannot find category with id ${id}`,'status':404}
}

export function createCategory(){}

export function updateCategory(){}

export function deleteCategory(){}

