const postModel = require("../model/post.model");

module.exports.slashcontroller = (req, res) => {
  res.send("Welcome to the Admin API");
};
module.exports.getPosts = async (req, res) => {
  const allPost = await postModel.find();
  if (!allPost || allPost.length === 0) {
    return res.status(404).send("No posts found");
  }
  res.status(200).json({ status: "success", data: allPost });
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
module.exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!title && !content) {
      return res.status(400).json({
        status: "fail",
        message: "Nothing to update – supply title or content.",
      });
    }
    const updated = await postModel.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updated) {
      return res
        .status(404)
        .json({ status: "fail", message: "Post not found." });
    }
    res.status(200).json({ status: "success", data: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Internal server error." });
  }
};
module.exports.deletePost = (req, res) => {
  res.send(`Delete post with ID: ${req.params.id}`);
};
