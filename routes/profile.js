const express= require('express');
const router= express.Router();
const userPosts= require('../controllers/posts_controller');

router.get('/posts', userPosts.posts);

module.exports= router;