const express = require("express");
const postController = require('../controllers/postController')

const router = express.Router();

router.get('/posts', postController.fetchPosts)

module.exports = router;