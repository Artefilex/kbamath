const Category = require("../models/Category");
const {deleteImageAndDestroyModel} = require("../middleware/delete/deletemodel")
const {list} = require("../middleware/list")
const slugField = require("../middleware/slugify");


exports.category_list = async (req, res) => {
    await list(Category,res)
  };
  
  exports.category_add = async (req, res) => {
    try {
      const category =  await Category.create({
        image: req.file.buffer,
        title: req.body.title,
        paramsUrl: slugField(req.body.title),
      });
      res.send(`${category} success`);
    } catch (err) {
      console.log(err);
    }
  };
  exports.category_delete = async (req, res) => {
    await deleteImageAndDestroyModel(Category, req.params.id, res);
  };