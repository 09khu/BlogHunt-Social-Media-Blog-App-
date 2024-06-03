import express from "express";
import { UpdateBlog, addBlog,deleteBlog,getAllBlogs, getById, getByUserId } from "../controllers/blog-controller";

const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",UpdateBlog);
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteBlog);
blogRouter.get('/user/:id',getByUserId);


export default blogRouter;