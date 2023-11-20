const express = require("express");
const router = express.Router();

const adminController = require("../controlers/admin");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// BLOG

router.post("/blogs/create", adminController.blog_create);
router.post("/blogs/delete/:BlogUrl", adminController.blog_delete);
router.all("/blogs/:blogid", adminController.blog_edit);
router.post("/login", adminController.post_login);
router.get("/login", adminController.get_login);
router.all("/blogs", adminController.blog_list);

// ADMİN PANEL

module.exports = router;
