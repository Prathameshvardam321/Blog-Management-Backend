import HttpStatus from 'http-status-codes';
import * as PostService from '../services/post.service'

export const createPost = async (req, res, next) => {
  try {
    const data = await PostService.createPost(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Post created successfully'
    });
  } catch (error) {
    next(error);
  }
};


export const getAllPost = async (req, res, next) => {
  try {
    const data = await PostService.getAllPost();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Post Fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const data = await PostService.updatePost(req.params.id, req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Post updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
    try {
      const data = await PostService.deletePost(req)
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Post deleted successfully'
      });
    } catch (error) {
      next(error)
    }
  }