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

export function createCategory(data){
    let category = {
        name:data.name,
    }
    const newCategory = createCategoryInDB(category);
    return newCategory;
}

export function updateCategory(id, updates){
    let updatedCategory = updateCategoryInDB(id,updates)
    if(updateCategory){
        return updateCategory
    }else{
        return {error:`cannot find category with id ${id}`,status:404}
    }
}

export function deleteCategory(id){
    const result = deleteCategoryInDB(id);
    if(result) return true;
    else return {error:`cannot find blog with ${id}`,status:404}
}

