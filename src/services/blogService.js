import { getById } from '../repositories/blogRepo.js'
import {getAll} from '../repositories/blogRepo.js'
export function getAllBlogs(query){
    return getAll(query)
}

export function getBlogById(id){
    return getById(id);
}