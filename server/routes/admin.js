const express = require("express");
const router = express.Router();

const adminController = require("../controlers/admin");
const dotenv = require("dotenv");
const upload = require("../helpers/singleUpload");
dotenv.config({ path: "./config.env" });

// BLOG

router.post("/blogs/create", adminController.blog_create);
router.post("/blogs/delete/:BlogUrl", adminController.blog_delete);
router.all("/blogs/:blogid", adminController.blog_edit);
router.post("/login", adminController.post_login);
router.get("/login", adminController.get_login);
router.all("/blogs", adminController.blog_list);



//  Education 
router.delete("/education/:id",adminController.education_delete)
router.put("/education/:id", adminController.putEducation)
router.post("/education",upload,  adminController.education_create)
router.get("/educaiton/:educationId" , adminController.getsingleEducation)
router.get("/education" ,adminController.education_list);



//  Quiz 

router.get("/quiz", adminController.quiz_list)


// Nots 


router.get("/nots", adminController.nots_list)

module.exports = router;
