const oClass = require("../models/otherClass")
const slugField = require("../middleware/slugify");
const {deleteImageAndDestroyModel} = require("../middleware/delete/deletemodel")
const {list} = require("../middleware/list")

exports.class_list = async (req, res) => {
    await list(oClass,res)
   };
  
  
  exports.class_create = async (req, res) => {
    try {
      await oClass.create({
        title: req.body.title,
        paramsUrl: slugField(req.body.title),
      });
      res.send(`${oClass} success`);
    } catch (err) {
      console.log(err);
    }
    
  };  
  exports.class_delete = async (req, res) => {
    try {
    
  
      const hclass = await oClass.findOne({
        where: {
          paramsUrl: req.body.id,
        },
      });
      if (hclass) {
        await hclass.destroy();
      }
      res.send("delete success");
    } catch (err) {
      console.log(err);
    }
  };