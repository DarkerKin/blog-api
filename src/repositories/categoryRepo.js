import { categories, getUniqueId } from "../db/categories.js";

// getCategoriesFromDB,
// getCategoryByIdFromDB,
// createCategoryInDB,
// updateCategoryInDB,
// deleteCategoryInDB

export function getCategoriesFromDB(query){
    let result = [...categories]
    return result;
}

export function getCategoryByIdFromDB(id){
    let categoryRequestedByUser = categories.find((category)=> category.id === id);
    return categoryRequestedByUser;
}

export function createCategoryInDB(){
    
}

export function updateCategoryInDB(){}

export function deleteCategoryInDB(){}
