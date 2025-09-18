import { getAllBlogs,getBlogById,createBlog,updateBlog ,deleteBlog} from "../services/blogService.js";
import { matchedData } from "express-validator";

export function getAllBlogsHandler(req,res){
    let query = matchedData(req);
    let result = getAllBlogs(query);
    res.status(200).json(result);
}

export function getBlogByIdHandler(req,res){
    let id = parseInt(req.params.id)
    let blog = getBlogById(id);
    if(!blog.error)
        res.status(200).json(blog);
    else 
        res.status(blog.status).json({error:blog.error})
}

export function createBlogHandler(req,res){
    let data = req.body;
    const newBlog = createBlog(data);
    res.status(201).json(newBlog);
}

export function updatedBlogHandler(req,res){
    let id = parseInt(req.params.id)
    let updates = req.body;
    console.log("updates in controller ",updates);
    
    let updatedBlog = updateBlog(id,updates)

    if(!updatedBlog.error){
        res.status(200).json(updatedBlog);
    }
    else{
        res.status(updatedBlog.status).json({error:updatedBlog.error});
    }
}

export function deleteBlogHandler(req,res){
    let id = parseInt(req.params.id);
    const result = deleteBlog(id);
    if(result.error){
        res.status(result.status).json({error:result.error});
    }else res.status(204).json();
}