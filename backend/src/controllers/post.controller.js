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

 
export const getAllCommentNewLogic = async (req, res, next) => {
  const data = await PostService.getAllCommentNewLogic(req.body);
  console.log(data, "data================");
  res.status(HttpStatus.OK).json({
    data: data
  });
};


export const oneMoreLogic = async (req, res, next) => {
  const data = await PostService.oneMoreLogic(req);
  console.log(data, "data================1");
  res.status(HttpStatus.OK).json({
    data: data
  });
};

export const replayComment = async (req, res, next) => {
  const data = await PostService.replayComment(req);
  console.log(data, "data================1");
  res.status(HttpStatus.OK).json({
    data: data
  });
};

export const likeCommentPost = async (req, res, next) => {
  try {
    const data = await PostService.likeCommentPost(req.params.id, req.params.email);

    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Post Liked successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const findAllComment = async (req, res, next) => {
  try {
    const data = await PostService.findAllComment(req);

    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'All comments feched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const data = await PostService.deleteComment(req);

    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Deleted comment successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const senMailForComment = async (req, res, next) => {
  try {
const data = await PostService.sendEmailFromComment(req)
  } catch (error) {

  }
}
  
export const getParticularComment = async (req, res, next) => {
  try {
    const data = await PostService.getParticularComment(req.params.id)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'fetched data'
    });
  } catch (error) {
    next(error);
  }
}