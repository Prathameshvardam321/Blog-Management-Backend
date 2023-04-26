import express from 'express';
const router = express.Router();

import userRoute from './user.route';

const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/post',postRoute)

  return router;
};

export default routes;
