import express from "express";
import{
    getAllBlogsHandler,
    getBlogByIdHandler,
    createBlogHandler,
    updatedBlogHandler,
    deleteBlogHandler,
} from '../controllers/blogController.js'

const router = express.Router();

router.get('/',getAllBlogsHandler);

router.get('/:id',getBlogByIdHandler);

router.post('/',createBlogHandler);

router.put('/:id',updatedBlogHandler);

router.delete('/:id',deleteBlogHandler);

export default router;