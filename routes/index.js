var express = require('express');
var router = express.Router();

var base = process.env.PWD;
var posts = require(base + '/controllers/posts');

router.get('/posts', posts.getPosts);
router.get('/post/:id', posts.getPost);
router.post('/post/create', posts.createPost);
router.put('/post/:id', posts.updatePost);
router.delete('/post/:id', posts.deletepost);

module.exports = router;
