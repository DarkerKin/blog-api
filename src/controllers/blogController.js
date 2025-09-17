import { getAllBlogs,getBlogById } from "../services/blogService.js";


export function getAllBlogsHandler(req,res){
    let query = req.query;
    let result = getAllBlogs(query);
    res.status(200).json(result);
}

export function getBlogByIdHandler(req,res){
    let id = parseInt(req.params.id)
    let blog = getBlogById(id);
    res.status(200).json(blog);
}

export function createBlogHandler(req,res){
    res.status(200).json({msg:"created"});
}

export function updatedBlogHandler(req,res){
    res.status(200).json({msg:"updated"});
}

export function deleteBlogHandler(req,res){
    res.status(200).json({msg:"deleted"});
}