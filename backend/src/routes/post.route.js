import express from 'express';
import * as postController from '../controllers/post.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { PostValidator } from '../validators/post.validator';
const router = express.Router();

router.post('/', userAuth, PostValidator, postController.createPost)

router.get("/", postController.getAllPost)

router.put('/editpost/:id', postController.updatePost)

router.delete('/deletePost/:id', postController.deletePost)

router.put('/:id/like/:email', userAuth, postController.likePost)

router.post('/:id/numberOfLike', userAuth, postController.numberOfLikes)

router.post('/:id/viewPost', userAuth, postController.viewPost)

router.get('/findMyLikedPost/:id', postController.findMyLikedPost)

router.get('/findMyPost/:id', postController.findMyPost)

router.get('/getPostById/:id', userAuth, postController.getPostById)

router.get('/getAllPost/:searchText', userAuth, postController.findPostByText)

export default router;