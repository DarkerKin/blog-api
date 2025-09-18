import express from "express";
import {param} from 'express-validator'
import {
    validateBlogId,
    validateBlogQuery,
    validateCreateBlog,
    validateUpdateBlog
}from '../middleware/blogValidators.js'
import{
    getAllBlogsHandler,
    getBlogByIdHandler,
    createBlogHandler,
    updatedBlogHandler,
    deleteBlogHandler,
} from '../controllers/blogController.js'

const router = express.Router();

router.get('/',validateBlogQuery,getAllBlogsHandler);

router.get('/:id', validateBlogId, getBlogByIdHandler);

router.post('/', validateCreateBlog, createBlogHandler);

router.put('/:id', validateBlogId, validateUpdateBlog, updatedBlogHandler);

router.delete('/:id', validateBlogId, deleteBlogHandler);

export default router;