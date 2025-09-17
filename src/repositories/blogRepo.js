import {blogs} from '../db/blogs.js'

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
    let blog = blogs.find((b)=>{
        b.id === id
    })
    return blog;
}