const app = require("express");
const router = app.Router();

const { Op } = require("sequelize");
const _ = require("lodash");

const Blog = require("../models/blog");
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



router.get("/education/:id", async(req , res) =>{
  const edId = req.params.id
  const educations = await Education.findAll({
    where: {
      paramsUrl: {
        [Op.ne]: edId,
      },
    },
  });
  const education = await Education.findOne({
    where:{
       paramsUrl: edId
    }
  })
  let data;

  if (education) {
    if (education.length > 4) {
      const randomEducaiton = _.sampleSize(education, 7);
      data = {
        educations: randomEducaiton,
        education: education,
      };
    } else {
      data = {
        educations: educations,
        education: education,
      };
    }
  }
  res.json(data)
})
router.get("/education", async(req , res) =>{
  const education = await Education.findAll()
  res.json(education)
})


module.exports = router;
