const slugField = require("../middleware/slugify");
const fs = require("fs");
const {deleteImageAndDestroyModel} = require("../middleware/delete/deletemodel")
const {list} = require("../middleware/list")
const {singleItem} = require("../middleware/single_item");
const Education = require("../models/education");


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
