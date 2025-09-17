import {blogs, nextUniqueId} from '../db/blogs.js'

export function getAll(query){
    let result = [...blogs]
    if(query.author) {
        result = result.filter(
            (blog)=>{
                blog.author.toLowerCase() === query.author.toLowerCase();
            }
        )
    }

    if(query.title){
        result = result.filter((blog) =>{
            blog.title.toLowerCase().includes(query.title.toLowerCase())
        })
    }

    if(query.result){
        result = result.filter((blog)=>{
            (blog) => blog.isPublished.toString() === query.published.toLowerCase()
        })
    }

    return result
}

export function getById(id){
    let blog = blogs.find((b)=>
        b.id === id
    )
    return blog;
}

export function create(blog){
    let id = nextUniqueId();
    const newBlog = {
        id, ...blog
    }
    blogs.push(newBlog);
    return newBlog;
}
/**
 * @todo
 */
export function update(id, updates){
    const index = blogs.findIndex((blog)=>blog.id === id)

    if(index !== -1){
        const updatedBlog = {...blogs[index],...updates,updatedAt:new Date().toISOString()};
        blogs[index] = updatedBlog;
        return updatedBlog;
    }else{
        return null;
    }
}