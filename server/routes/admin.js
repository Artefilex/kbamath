const express = require("express");
const router = express.Router();

const adminController = require("../controlers/admin");
const dotenv = require("dotenv");
const upload = require("../helpers/singleUpload");
dotenv.config({ path: "./config.env" });

// BLOG

router.delete("/blogs/delete/:blogid", upload, adminController.blog_delete);
router.put("/blogs/:blogid", upload, adminController.blog_edit);
router.get("/blogs/:blogid", adminController.single_blog);
router.post("/blogs", upload, adminController.blog_create);
router.get("/blogs", adminController.blog_list);



//  Education
router.delete("/education/:id", adminController.education_delete);
router.put("/education/:id", upload, adminController.putEducation);
router.get("/education/:id", adminController.getsingleEducation);
router.post("/education", upload, adminController.education_create);
router.get("/education", adminController.education_list);

//  Quiz
router.delete("/quizs/:id", adminController.quiz_delete);
router.put("/quizs/:id", upload, adminController.edit_quiz);
router.get("/quizs/:id", adminController.get_single_quiz);
router.post("/quizs", upload, adminController.create_quiz);
router.get("/quizs", adminController.quiz_list);

// Nots

router.delete("/nots/:id", adminController.nots_delete);
router.put("/nots/:id", upload, adminController.edit_nots);
router.get("/nots/:id", adminController.get_single_nots);
router.post("/nots", upload, adminController.create_nots);
router.get("/nots", adminController.nots_list);

// Category

router.delete("/category/:id", adminController.category_delete);
router.post("/category", upload, adminController.category_add);
router.get("/category", adminController.category_list);

router.delete("/users/:id", adminController.user_delete);
router.put("/users/:id", upload, adminController.edit_users);
router.post("/users", upload, adminController.register);
router.get("/users", adminController.users_list);

router.post("/login", adminController.post_login);

module.exports = router;
