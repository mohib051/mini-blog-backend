const express = require('express'); 
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.get('/', adminController.slashcontroller);
router.get("/posts",adminController.getPosts);
router.post("/posts", adminController.createPost);
router.put("/posts/:id", adminController.updatePost);
router.delete("/posts/:id", adminController.deletePost);
router.get("/posts/:id", adminController.getSinglePost )
module.exports = router;