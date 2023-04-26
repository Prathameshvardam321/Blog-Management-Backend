import express from 'express';
import * as postController from '../controllers/post.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { PostValidator } from '../validators/post.validator';
const router = express.Router();

router.post('/', userAuth, PostValidator, postController.createPost)

router.get("/", postController.getAllPost)

router.put('/editpost/:id', postController.updatePost)


export default router;