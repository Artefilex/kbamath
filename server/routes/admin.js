const express = require("express");
const router = express.Router();

const quizController = require("../controlers/quiz")
const educationController = require("../controlers/education")
const notController = require("../controlers/nots")
const blogController =require("../controlers/blog")
const categoryController =require("../controlers/category")
const adminController = require("../controlers/admin");
const dotenv = require("dotenv");
const upload = require("../helpers/singleUpload");
dotenv.config({ path: "./config.env" });

// BLOG

router.delete("/blogs/delete/:blogid", upload, blogController.blog_delete);
router.put("/blogs/:blogid", upload, blogController.blog_edit);
router.get("/blogs/:blogid", blogController.single_blog);
router.post("/blogs", upload, blogController.blog_create);
router.get("/blogs", blogController.blog_list);



//  Education
router.delete("/education/:id", educationController.education_delete);
router.put("/education/:id", upload, educationController.putEducation);
router.get("/education/:id", educationController.getsingleEducation);
router.post("/education", upload, educationController.education_create);
router.get("/education", educationController.education_list);

//  Quiz
router.delete("/quizs/:id", quizController.quiz_delete);
router.put("/quizs/:id", upload, quizController.edit_quiz);
router.get("/quizs/:id", quizController.get_single_quiz);
router.post("/quizs", upload, quizController.create_quiz);
router.get("/quizs", quizController.quiz_list);

// Nots

router.delete("/nots/:id", notController.nots_delete);
router.put("/nots/:id", upload, notController.edit_nots);
router.get("/nots/:id", notController.get_single_nots);
router.post("/nots", upload, notController.create_nots);
router.get("/nots", notController.nots_list);

// Category

router.delete("/category/:id", categoryController.category_delete);
router.post("/category", upload, categoryController.category_add);
router.get("/category", categoryController.category_list);

router.delete("/users/:id", adminController.user_delete);
router.put("/users/:id", upload, adminController.edit_users);
router.post("/users", upload, adminController.register);
router.get("/users", adminController.users_list);

router.post("/login", adminController.post_login);

module.exports = router;
