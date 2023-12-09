const Blog = require("../models/blog");
const slugField = require("../middleware/slugify");
const fs = require("fs");
const {deleteImageAndDestroyModel} = require("../middleware/delete/deletemodel")
const {list} = require("../middleware/list")
const {singleItem} = require("../middleware/single_item");

exports.blog_list = async (req, res) => {
  try {
    const blog = await Blog.findAll();
    if (blog) {
      res.json(blog);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
   };
  
  exports.blog_create = async (req, res) => {
    try {
      await Blog.create({
        image: req.file.path,
        header: req.body.header,
        subtitle: req.body.subtitle,
        content: req.body.content,
        paramsUrl: slugField(req.body.header),
        author: req.body.author
      });
      res.send(`Blog success`);
    } catch (err) {
      console.log(err);
    }
  };
  
  exports.single_blog = async (req, res) => {
    await singleItem(Blog,req.params.blogid,res)
  };
  
  exports.blog_edit = async (req, res) => {
    try {
      const blog = await Blog.findOne({
        where: {
          paramsUrl: req.params.blogid,
        },
      });
      console.log(req.body.oldImage);
  
      if (req.file) {
        const oldImageUrl = req.body.oldImage;
          blog.image = req.file.path
          blog.header = req.body.header
          blog.content = req.body.content
          blog.subtitle = req.body.subtitle
          blog.paramsUrl = slugField(req.body.header)
          blog.author = blog.author
        await fs.unlinkSync(oldImageUrl);
      } else {
        blog.image = req.body.oldImage;
        blog.header = req.body.header
        blog.content = req.body.content
        blog.subtitle = req.body.subtitle
        blog.paramsUrl = slugField(req.body.header)
        blog.author = blog.author
      }
  
      await blog.save();
      res.send(`${req.body.header} blog edit`);
    } catch (err) {
      console.log(err);
    }
  };
  
  exports.blog_delete = async (req, res) => {
    await deleteImageAndDestroyModel(Blog, req.params.blogid, res);
  };