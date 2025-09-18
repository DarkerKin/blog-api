import { categories, getUniqueId } from "../db/categories.js";



export function getCategoriesFromDB(query){
    let result = [...categories]
    return result;
}

export function getCategoryByIdFromDB(id){
    let categoryRequestedByUser = categories.find((category)=> category.id === id);
    return categoryRequestedByUser;
}

export function createCategoryInDB(category){
    let id = getUniqueId();
    const newCategory = {
        id,...category
    }
    categories.push(newCategory);
    return newCategory
}   

export function updateCategoryInDB(id,update){
    let index = categories.findIndex(cat => cat.id === id);
    if(index !== -1){
        let updatedCategory = {...categories[index] ,...update}
        categories[index] = updatedCategory;
        return updatedCategory;
    }
    else{
        return null;
    }
}

export function deleteCategoryInDB(id){
    let index = categories.findIndex(cat => cat.id === id);
    if(index !== -1){
        categories.splice(index,1)
        return true;
    }
    else{
        return false;
    }
}
