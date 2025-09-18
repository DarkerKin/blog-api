import { getById,create,update,remove,getAll} from '../repositories/blogRepo.js'
export function getAllBlogs(query){
    return getAll(query)
}

export function getBlogById(id){
    let result =  getById(id);
    if(result){
        return result;
    }
    return  {"error":`cannot find blog with id ${id}`,status:404};
}

export function createBlog(data){
    const now = new Date().toISOString();
    let blog= {
        title:data.title,
        content: data.content,
        author: data.author,
        isPublished: data.isPublished || false,
        createdAt: now,
        updatedAt: now,
        publishedAt: data.isPublished ? now : null,
    }
    const newBlog = create(blog);
    return newBlog;
}

export function updateBlog(id, updates){
    if(!updates || (!updates.title && !updates.content && !updates.author))
        return {error:`No updateable fields provided`,status:400}
    const updateBlog = update(id, updates);
    
    if(updateBlog) return updateBlog;
    else return {error:`cannot find blog with ${id}`,status:404}
}

export function deleteBlog(id){
    const result = remove(id);
    if(result) return true;
    else return {error:`cannot find blog with ${id}`,status:404}
} 