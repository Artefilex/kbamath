const Quiz = require("../models/quiz");
const slugField = require("../middleware/slugify");
const fs = require("fs");
const {deleteImageAndDestroyModel} = require("../middleware/delete/deletemodel")
const {list} = require("../middleware/list")
const {singleItem} = require("../middleware/single_item");



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