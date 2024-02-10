const express = require("express");
const postController = require('../controllers/postController')

const router = express.Router();

router.get('/posts', postController.fetchPosts)

router.get('/posts/:id', postController.fetchSinglePost)

module.exports = router;