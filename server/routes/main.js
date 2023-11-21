const app = require("express");
const sendmail = require("../helpers/mailsend");
const config = require("../config");
const Blog = require("../models/blog");
const router = app.Router();
const { Op } = require("sequelize");
const _ = require("lodash");
const Quizs = require("../models/quiz")
const Nots = require("../models/nots")
const Education = require("../models/education")

router.get("/blogs/:id", async (req, res) => {
  const blogid = req.params.id;
  const blogs = await Blog.findAll({
    where: {
      blogUrl: {
        [Op.ne]: blogid,
      },
    },
  });

  const blog = await Blog.findOne({
    where: {
      blogUrl: blogid,
    },
  });
  let data;

  if (blog) {
    if (blogs.length > 4) {
      const randomBlogs = _.sampleSize(blogs, 4);
      data = {
        blogs: randomBlogs,
        blog: blog,
      };
    } else {
      data = {
        blogs: blogs,
        blog: blog,
      };
    }
  }
  res.json(data);
});

router.get("/blogs", async (req, res) => {
  const blogs = await Blog.findAll();
  res.json(blogs);
});

router.get("/quizs", async(req , res) =>{
  const quizs = await Quizs.findAll()
  res.json(quizs)
})

router.get("/nots", async(req , res) =>{
  const nots = await Nots.findAll()
  res.json(nots)
})

router.get("/education", async(req , res) =>{
  const education = await Education.findAll()
  res.json(education)
})

// router.get("/", async (req, res) => {
//   res.send(req.session.isAdmin);
// });

// eslint-disable-next-line no-undef
module.exports = router;
