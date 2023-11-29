const slugField = require("../middleware/slugify");
const fs = require("fs");
const {deleteImageAndDestroyModel} = require("../middleware/delete/deletemodel")
const {list} = require("../middleware/list")
const Users = require("../models/users");


exports.post_login = async (req, res) => {
 
  try {
     const user = Users.findOne({where:{
      password: req.body.password,
      email:req.body.email,
     }}) 
     if(user){
      req.session.isAdmin = true;
      res.redirect("/");
     }
    
  } catch (err) {
    console.log(err);
  }
};
exports.register = async (req, res) => {
 try{
  const user =  await Users.create({
    avatar: req.file.path,
    username: req.body.username,
    paramsUrl: slugField(req.body.username),
    isAdmin: req.body.isAdmin,
    password:req.body.password
  });
  res.send(`${user} success`);
 }
 catch(err){
  console.log(err);
 }
};
exports.users_list = async (req, res) => {
  await list(Users,res)
};
exports.user_delete = async (req, res) => {
  await deleteImageAndDestroyModel(Users, req.params.id, res);
};
exports.edit_users = async (req, res) => {
  try {
    const user = await Users.findOne({ where: { paramsUrl: req.params.id } });
    const oldImageUrl = req.body.oldImage;
    if (req.file) {
      user.avatar =  req.file.path,
      user.username =  req.body.username,
      user.paramsUrl =  slugField(req.body.username),
      user.isAdmin =  req.body.isAdmin,
      user.password = req.body.password
      await fs.unlinkSync(oldImageUrl);
    } else {
      user.avatar =   req.body.oldImage;
      user.username =  req.body.username,
      user.paramsUrl =  slugField(req.body.username),
      user.isAdmin =  req.body.isAdmin,
      user.password = req.body.password
    }
    await user.save();
    res.send(`${user.paramsUrl} quiz edited`);
   

  } catch (err) {
    console.log(err);
  }
};