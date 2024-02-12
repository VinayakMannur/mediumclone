const express = require("express");
const commentController = require('../controllers/commentController')

const router = express.Router();

router.get('/comments/:id', commentController.fetchComments)

router.post('/addComment/:id', commentController.addComment)

module.exports = router;