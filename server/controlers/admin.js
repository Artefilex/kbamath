const Blog = require("../models/blog");
const Nots = require("../models/nots");
const Quiz = require("../models/quiz");
const Education = require("../models/education");
const slugField = require("../middleware/slugify");
const fs = require("fs");
const { log } = require("console");

// Admin Blog

exports.blog_list = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.json(blogs);
  } catch (err) {
    console.log(err);
  }
};

exports.blog_create = async (req, res) => {
  try {
    await Blog.create({
      image: req.file.path,
      header: req.body.header,
      subtitle: req.body.subtitle,
      content: req.body.content,
      blogUrl: slugField(req.body.header),
    });
    res.send(`Blog success`);
  } catch (err) {
    console.log(err);
  }
};

exports.single_blog = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      where: {
        blogUrl: req.params.blogid,
      },
    });
    if (blog) {
      res.json(blog);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.blog_edit = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      where: {
        blogUrl: req.params.blogid,
      },
    });
    console.log(req.body.oldImage);

    if (req.file) {
      const oldImageUrl = req.body.oldImage;
      blog.image = req.file.path
        blog.header = req.body.header
        blog.content = req.body.content
        blog.subtitle = req.body.subtitle
        blog.blogUrl = slugField(req.body.header)
      await fs.unlinkSync(oldImageUrl);
    } else {
      blog.image = req.body.oldImage;
      blog.header = req.body.header
      blog.content = req.body.content
      blog.subtitle = req.body.subtitle
      blog.blogUrl = slugField(req.body.header)
    }

    await blog.save();
    res.send(`${req.body.header} blog edit`);
  } catch (err) {
    console.log(err);
  }
};

exports.blog_delete = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      where: {
        blogUrl: req.params.blogid,
      },
    });
    if (blog) {
      await fs.unlinkSync(blog.image);
      await blog.destroy();
    }
    res.send("delete success");
  } catch (err) {
    console.log(err);
  }
};

// Admin Education

exports.education_list = async (req, res) => {
  try {
    const education = await Education.findAll();
    res.json(education);
  } catch (err) {
    console.log(err);
  }
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
  try {
    console.log(req.params.id);
    const education = await Education.findOne({
      where: {
        paramsUrl: req.params.id,
      },
    });
    if (education) {
      res.json(education);
    }
  } catch (err) {
    console.log(err);
  }
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
    res.send(`${forms.id} education edited`);
  } catch (err) {
    console.log(err);
  }
};

exports.education_delete = async (req, res) => {
  try {
    const education = await Education.findOne({
      where: {
        paramsUrl: req.params.id,
      },
    });
    if (education) {
      await fs.unlinkSync(education.image);
      await education.destroy();
    }
    res.send("delete success");
  } catch (err) {
    console.log(err);
  }
};
// Nots

exports.nots_list = async (req, res) => {
  try {
    const nots = await Nots.findAll();
    res.json(nots);
  } catch (err) {
    console.log(err);
  }
};

// exports.nots_create = async (req, res) => {
//   const form = req.body.form;
//   try {
//     await Nots.create({
//       title: form.title,
//       imgUrl: form.imgUrl,
//       category: form.category,
//       blogUrl:  form.blogUrl,
//       children: form.children,

//     });
//     res.send(`${form} success`);

//     slugField(form.header)
//   } catch (err) {
//     console.log(err);
//   }
// };

// Admin Quiz

exports.quiz_list = async (req, res) => {
  try {
    const quiz = await Quiz.findAll();
    res.json(quiz);
  } catch (err) {
    console.log(err);
  }
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
  try {
    const quiz = await Quiz.findOne({
      where: {
        paramsUrl: req.params.id,
      },
    });
    console.log(quiz)
    if (quiz) {
      res.json(quiz);
    }
  } catch (err) {
    console.log(err);
  }
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
exports.quiz_delete = async  (req, res) => { 
  try {
    const quiz = await Quiz.findOne({ where: { paramsUrl: req.params.id } });
   
    if (quiz) {
      await fs.unlinkSync(quiz.image);
      await quiz.destroy();
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
