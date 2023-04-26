import Joi from '@hapi/joi';

export const PostValidator = (req, res, next) => {
  const schema = Joi.object({
    Title: Joi.string().min(3).required(),
    Description: Joi.string().required(),
    Type:Joi.string(),
    Email:Joi.string().min(3),
    date:Joi.date()
    
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};