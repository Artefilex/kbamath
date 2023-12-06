const otherClass = require("../models/otherClass")
const slugField = require("../middleware/slugify");
const {deleteImageAndDestroyModel} = require("../middleware/delete/deletemodel")
const {list} = require("../middleware/list")

exports.class_list = async (req, res) => {
    await list(otherClass,res)
   };
  
  
  exports.class_create = async (req, res) => {
  
    try {
      await otherClass.create({
        title: req.body.title,
        paramsUrl: slugField(req.body.title),
      });
      res.send(`${otherClass} success`);
    } catch (err) {
      console.log(err);
    }
    
  };  
  exports.class_delete = async (req, res) => {
    try {
    
  
      const hclass = await otherClass.findOne({
        where: {
          paramsUrl: req.params.id,
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