const slugField = require("../middleware/slugify");
const fs = require("fs");
const {deleteImageAndDestroyModel} = require("../middleware/delete/deletemodel")
const {list} = require("../middleware/list")
const Users = require("../models/users");
const bcrypt = require("bcrypt")
const sessions = require('express-session');
const saltRounds = 10;

exports.post_login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (user) {
      const match = await bcrypt.compare(req.body.password, user.password);
      if (match) {
      
        req.session.userid = user.id;
        return res.json({ success: true , isAdmin : user.isAdmin , email:user.email , username: user.username}); 
      } else {
    
        return res.status(401).json({ success: false, message: "Invalid password" });
      }
    } else {
 
      return res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (err) {
   
    console.error(err);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
exports.register = async (req, res) => {
 try{
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user =  await Users.create({
    email : req.body.email,
    username: req.body.username,
    paramsUrl: slugField(req.body.username),
    password:hashedPassword,
    isAdmin: req.body.isAdmin,
    superAdmin : req.body.superAdmin
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
    if (user) {
      const match = await bcrypt.compare(req.body.oldPassword, user.password);
      if (match) {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        user.password = hashedPassword     
     
      } else {
    
        return res.status(401).json({ success: false, message: "Invalid password" });
      }
    } else {
 
      return res.status(404).json({ success: false, message: "User not found" });
    }
    await user.save()
    res.send("update password")
  } catch (err) {
   
    console.error(err);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
   
};

exports.edit_superAdmin_By_users = async (req, res) => {
  try {
    const user = await Users.findOne({where:{
      paramsUrl: req.params.id
    }})
    if(user){
       user.isAdmin = req.body.isAdmin
    
    }
    await user.save();
    res.send(`${user.paramsUrl} quiz edited`);
   

    
  } catch (err) {
    console.log(err);
  }
};