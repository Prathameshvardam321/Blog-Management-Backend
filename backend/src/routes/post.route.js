import express from 'express';
import * as postController from '../controllers/post.controller';
import { userAuth } from '../middlewares/auth.middleware';
import * as ImageController from '../controllers/image.controller'
import { PostValidator } from '../validators/post.validator';
import upload from '../utils/upload';
const router = express.Router();

router.post('/', userAuth, PostValidator, postController.createPost)

router.get("/", postController.getAllPost)

router.put('/editpost/:id', postController.updatePost)

router.delete('/deletePost/:id', postController.deletePost)

router.put('/:id/like/:email', userAuth, postController.likePost)

router.post('/:id/numberOfLike', userAuth, postController.numberOfLikes)

router.post('/:id/viewPost/:Email', postController.viewPost)

router.get('/findMyLikedPost/:id', postController.findMyLikedPost)

router.get('/findMyPost/:id', postController.findMyPost)

router.get('/getPostById/:id', userAuth, postController.getPostById)

router.get('/getAllPost/:searchText', userAuth, postController.findPostByText)

router.get('/arrangeByLikesSortHighToLow',postController.arrangeByLikesSortHighToLow)

router.get('/arrangeByLikesSortLowToHigh',postController.arrangeByLikesSortLowToHigh)

router.get('/:id/comments/', postController.getAllCommentNewLogic)

router.post('/comment/:id/:Author', postController.oneMoreLogic)


router.post('/:blogid/replaycomment/:id', postController.replayComment)

router.put('/:id/likeComment/:email', postController.likeCommentPost)

router.get('/comment/:id', postController.findAllComment)

router.delete('/comment/:id', postController.deleteComment)

router.post("/sendEmail/:authorEmail/:commentAuthor",postController.senMailForComment)

export default router;