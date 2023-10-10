const express = require("express");
const router = express.Router();

const adminController = require("../controlers/admin");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// BLOG

router.post("/blogs/create", adminController.blog_create);
router.post("/blogs/delete/:BlogUrl", adminController.blog_delete);
router.all("/blogs/:blogid", adminController.blog_edit);
router.post("/login", adminController.admin_login);
router.all("/blogs", adminController.blog_list);

// ADMİN PANEL

router.post("/panel/portfoly/create", adminController.portfoly_create);
router.post("/panel/portfoly/delete/:portid", adminController.portfoly_remove);
router.all("/panel/portfoly/:portid", adminController.portfoly_edit);

router.post("/panel/skill/create", adminController.skill_create);
router.post("/panel/skill/delete/:skillid", adminController.skill_remove);
router.all("/panel/skill/:skillid", adminController.skill_edit);

router.get("/panel", adminController.panel_list);

module.exports = router;
