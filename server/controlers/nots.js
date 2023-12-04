const Nots = require("../models/nots");
const slugField = require("../middleware/slugify");
const fs = require("fs");
const {deleteImageAndDestroyModel} = require("../middleware/delete/deletemodel")
const {list} = require("../middleware/list")
const {singleItem} = require("../middleware/single_item");

const date = new Date()
const options = { 
  year: 'numeric', 
  month: 'numeric', 
  day: 'numeric', 
  hour: 'numeric', 
  minute: 'numeric', 
  second: 'numeric', 
  timeZone: 'UTC' 
};

const formattedDate = date.toLocaleString('en-US', options);


exports.nots_list = async (req, res) => {
    await list(Nots,res)
  };
  exports.create_nots = async (req,res) => {
    try {
  
      const createNots = await Nots.create({
        image: req.file.path,
        category: slugField(req.body.category),
        class: slugField(req.body.class),
        description: req.body.description,
        paramsUrl: slugField(req.body.description + formattedDate),
      });
      res.send(`${createNots} success`);
     
    
    } catch (err) {
      console.log(err);
    }
  };
  exports.get_single_nots = async  (req, res) => {
    await singleItem(Nots,req.params.id,res)
  };
  exports.edit_nots = async  (req, res) => {
    try {
      const nots = await Nots.findOne({ where: { paramsUrl: req.params.id } });
      const oldImageUrl = req.body.oldImage;
      if (req.file) {
        nots.image= req.file.path
        nots.category= slugField(req.body.category)
        nots.class = slugField(req.body.class)
        nots.description= req.body.description
        nots.paramsUrl= slugField(req.body.description  + formattedDate)
        await fs.unlinkSync(oldImageUrl);
      } else {
        nots.category=  slugField(req.body.category)
        nots.description= req.body.description
        nots.class = slugField(req.body.class)
        nots.paramsUrl= slugField(req.body.description  + formattedDate)
        nots.image = req.body.oldImage;
      }
      await nots.save();
      res.send(`${nots.description} quiz edited`);
    } catch (err) {
      console.log(err);
    }
  };
  
  exports.nots_delete = async (req, res) => {
    await deleteImageAndDestroyModel(Nots, req.params.id, res);
  };
