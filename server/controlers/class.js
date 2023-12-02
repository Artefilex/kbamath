const Class = require("../models/class")
const slugField = require("../middleware/slugify");
const {deleteImageAndDestroyModel} = require("../middleware/delete/deletemodel")
const {list} = require("../middleware/list")

exports.class_list = async (req, res) => {
    await list(Class,res)
   };
  
  exports.class_create = async (req, res) => {
    try {
      await Class.create({
        title: req.body.title,
        paramsUrl: slugField( req.body.title),
      });
    } catch (err) {
      console.log(err);
    }
  };  
  exports.class_delete = async (req, res) => {
    await deleteImageAndDestroyModel(Class, req.params.blogid, res);
  };