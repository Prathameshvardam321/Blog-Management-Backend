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

  export const likePost = async (req, res, next) => {
    try {
      const data = await PostService.likePost(req.params.id,req.params.email)
  
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Post Liked successfully'
      });
    } catch (error) {
      next(error)
    }
  }
  
  
  
  export const numberOfLikes = async (req, res, next) => {
    try {
      const data = await PostService.numberOfLikes(req)
  
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Number of Likes updated'
      });
    } catch (error) {
      next(error)
    }
  }
  
  export const viewPost = async (req, res, next) => {
    try {
      const data = await PostService.viewPost(req)
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'view added successfully'
      });
    } catch (error) {
      next(error)
    }
  }
  
  
  
  //findMyLikedPost
  export const findMyLikedPost = async (req, res, next) => {
    try {
      const data = await PostService.findMyLikedPost(req.params.id)
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Fetched Liked post successfully'
      });
    } catch (error) {
      next(error)
    }
  }
  
  export const findMyPost = async (req, res, next) => {
    try {
      const data = await PostService.findMyPost(req.params.id)
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Fetched my created post successfully'
      });
    } catch (error) {
      next(error)
    }
  }
  
  export const getPostById = async (req, res, next) => {
    try {
      const data = await PostService.getPostById(req)
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Fetched my created post successfully'
      });
    } catch (error) {
      next(error)
    }
  }
  
  //findPostByText
  export const findPostByText = async (req, res, next) => {
    try {
      const data = await PostService.findPostByText(req.params.searchText)
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Fetched my created post successfully'
      });
    } catch (error) {
      next(error)
    }
  }

  export const giveComment = async (req, res, next) => {
    const data = await BlogService.giveComment(req);
    res.status(201).json({
      data: data
    });
  };
  export const giveCommentNewLogic = async (req, res, next) => {
    // const data = await BlogService.getCommentByParentID(req.params.id);
    const data = await BlogService.giveCommentNewLogic(req);
    res.status(201).json({
      data: data
    });
  };
  