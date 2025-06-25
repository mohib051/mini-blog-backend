const postModel = require("../model/post.model");

module.exports.slashcontroller = (req, res) => {
  res.send("Welcome to the Admin API");
};
module.exports.getPosts = (req, res) => {
  res.send("List of posts");
};
module.exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).send("Title and content are required");
    }
    const newPost = await postModel.create({ title, content });
    res.status(201).json({ status: "success", data: newPost });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
module.exports.updatePost = (req, res) => {
  res.send(`Update post with ID: ${req.params.id}`);
};
module.exports.deletePost = (req, res) => {
  res.send(`Delete post with ID: ${req.params.id}`);
};
