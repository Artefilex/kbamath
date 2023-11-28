const Blog = require("../models/blog");
const Nots = require("../models/nots");
const Quiz = require("../models/quiz");
const Education = require("../models/education");
const slugField = require("../middleware/slugify");
const fs = require("fs");
const Category = require("../models/Category");
const {deleteImageAndDestroyModel} = require("../middleware/delete/deletemodel")
const {list} = require("../middleware/list")
const {singleItem} = require("../middleware/single_item");

// Admin Blog
const date = new Date()
const options = { 
  year: 'numeric', 
  month: 'numeric', 
  day: 'numeric', 
  hour: 'numeric', 
  minute: 'numeric', 
  second: 'numeric', 
  timeZone: 'UTC' 
};

const formattedDate = date.toLocaleString('en-US', options);
exports.blog_list = async (req, res) => {
  await list(Blog,res)
 };

exports.blog_create = async (req, res) => {
  try {
    await Blog.create({
      image: req.file.path,
      header: req.body.header,
      subtitle: req.body.subtitle,
      content: req.body.content,
      paramsUrl: slugField(req.body.header),
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
      await fs.unlinkSync(oldImageUrl);
    } else {
      blog.image = req.body.oldImage;
      blog.header = req.body.header
      blog.content = req.body.content
      blog.subtitle = req.body.subtitle
      blog.paramsUrl = slugField(req.body.header)
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
// Admin Education

exports.education_list = async (req, res) => {
  await list(Education,res)
};
exports.education_create = async (req, res) => {
  try {
    const education = await Education.create({
      image: req.file.path,
      title: req.body.title,
      price: req.body.price,
      paramsUrl: slugField(req.body.title),
      content: req.body.content,
    });
    res.send(`${education} success`);
  } catch (err) {
    console.log(err);
  }
};

exports.getsingleEducation = async (req, res) => {
  await singleItem(Education,req.params.id,res)
};
exports.putEducation = async (req, res) => {
  try {
    const education = await Education.findOne({
      where: { paramsUrl: req.params.id },
    });
    const oldImageUrl = req.body.oldImage;
    if (req.file) {
      education.image = req.file.path;
      education.title = req.body.title;
      education.price = req.body.price;
      education.paramsUrl = slugField(req.body.title);
      education.content = req.body.content;
      await fs.unlinkSync(oldImageUrl);
    } else {
      education.title = req.body.title;
      education.price = req.body.price;
      education.paramsUrl = slugField(req.body.title);
      education.content = req.body.content;
      education.image = req.body.oldImage;
    }
    await education.save();
    res.send(`${education.id} education edited`);
  } catch (err) {
    console.log(err);
  }
};


exports.education_delete = async (req, res) => {
  await deleteImageAndDestroyModel(Education, req.params.id, res);
};

// Nots

exports.nots_list = async (req, res) => {
  await list(Nots,res)
};
exports.create_nots = async (req,res) => {
  try {
   
  
    const createNots = await Nots.create({
      image: req.file.path,
      category: req.body.category,
      class: req.body.class,
      description: req.body.description,
      paramsUrl: slugField(req.body.description + formattedDate),
    });
    res.send(`${createNots} success`);
   
  
  } catch (err) {
    console.log(err);
  }
};
exports.get_single_nots = async  (req, res) => {
  await singleItem(Nots,req.params.id,res)
};
exports.edit_nots = async  (req, res) => {
  try {
    const nots = await Nots.findOne({ where: { paramsUrl: req.params.id } });
    const oldImageUrl = req.body.oldImage;
    if (req.file) {
      nots.image= req.file.path
      nots.category= req.body.category
      nots.class = req.body.class
      nots.description= req.body.description
      nots.paramsUrl= slugField(req.body.description  + formattedDate)
      await fs.unlinkSync(oldImageUrl);
    } else {
      nots.category= req.body.category
      nots.description= req.body.description
      nots.class = req.body.class
      nots.paramsUrl= slugField(req.body.description  + formattedDate)
      nots.image = req.body.oldImage;
    }
    await nots.save();
    res.send(`${nots.description} quiz edited`);
  } catch (err) {
    console.log(err);
  }
};

exports.nots_delete = async (req, res) => {
  await deleteImageAndDestroyModel(Nots, req.params.id, res);
};

// Admin Quiz

exports.quiz_list = async (req, res) => {
  await list(Quiz,res)
};

exports.create_quiz = async (req,res) => {
  try {
   
    const createQuiz = await Quiz.create({
      image: req.file.path,
      title: req.body.title,
      iframeUrl: req.body.iframeUrl,
      paramsUrl: slugField(req.body.title),
      iframeHeight: req.body.iframeHeight,
    });
    console.log( "quizs" + createQuiz)
    res.send(`${createQuiz} success`);
  } catch (err) {
    console.log(err);
  }
};
exports.get_single_quiz = async  (req, res) => {
  await singleItem(Quiz,req.params.id,res)
};
exports.edit_quiz = async  (req, res) => {
  try {
    const quiz = await Quiz.findOne({ where: { paramsUrl: req.params.id } });
    const oldImageUrl = req.body.oldImage;
    console.log(oldImageUrl)
    console.log(quiz)
    if (req.file) {
      quiz.image = req.file.path;
      quiz.title = req.body.title;
      quiz.iframeUrl = req.body.iframeUrl;
      quiz.paramsUrl = slugField(req.body.title);
      quiz.iframeHeight = req.body.iframeHeight;
      await fs.unlinkSync(oldImageUrl);
    } else {
      quiz.title = req.body.title;
      quiz.iframeUrl = req.body.iframeUrl;
      quiz.paramsUrl = slugField(req.body.title);
      quiz.iframeHeight = req.body.iframeHeight;
      quiz.image = req.body.oldImage;
    }
    await quiz.save();
    res.send(`${quiz.paramsUrl} quiz edited`);
  } catch (err) {
    console.log(err);
  }
};

exports.quiz_delete = async (req, res) => {
  await deleteImageAndDestroyModel(Quiz, req.params.id, res);
};
// admin category 

exports.category_list = async (req, res) => {
  await list(Category,res)
};

exports.category_add = async (req, res) => {
  try {
    const category =  await Category.create({
      image: req.file.path,
      title: req.body.title,
      paramsUrl: slugField(req.body.title),
    });
    res.send(`${category} success`);
  } catch (err) {
    console.log(err);
  }
};
exports.category_delete = async (req, res) => {
  try {

    const category = await Category.findOne({ where: { paramsUrl: req.params.id } });
    if (category) {
      await fs.unlinkSync(category.image);
      await category.destroy();
    }
    res.send("delete success");

  } catch (err) {
    console.log(err);
  }
};

//  login logout
exports.post_login = async (req, res) => {
  const admin = req.body.form;
  console.log(admin, res.length);
  try {
    if (
      admin.name == process.env.ADMIN_NAME &&
      admin.password == process.env.ADMIN_PASSWORD
    ) {
      req.session.isAdmin = true;
      console.log("welcome boss");
      res.redirect("/");
    } else {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  } catch (err) {
    console.log(err);
  }
};
exports.get_login = async (req, res) => {
  const admin = req.body.form;
  try {
    if (
      admin.name == process.env.ADMIN_NAME &&
      admin.password == process.env.ADMIN_PASSWORD
    ) {
      req.session.isAdmin = true;
      res.redirect("/");
    } else {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  } catch (err) {
    console.log(err);
  }
};
