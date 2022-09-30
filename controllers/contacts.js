const Post = require('../models/posts');

//GETS ALL POSTS
async function getAllContacts(req, res) {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//GETS A SPECIFIC POST
async function getOneContact(req, res) {
  try {
    const post = await Post.findById(req.params.postId);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//SUBMITS A POST
async function createContact(req, res) {
  try {
    const post = new Post({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//UPDATE A POST
async function updateContact(req, res) {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      req.body
    );
    res.status(204).json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//DELETE A POST
async function deleteContact(req, res) {
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.postId });
    res.status(200).json(removedPost);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

module.exports = {
  getAllContacts,
  getOneContact,
  createContact,
  updateContact,
  deleteContact,
};
