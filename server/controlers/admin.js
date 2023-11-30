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
        // Oturumu başlat
        req.session.userid = user.id;
        return res.json({ success: true , isAdmin : user.isAdmin}); // Return a JSON response
      } else {
        // Hatalı şifre durumu
        return res.status(401).json({ success: false, message: "Invalid password" });
      }
    } else {
      // Kullanıcı bulunamadı durumu
      return res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (err) {
    // İç server hatası durumu
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
    isAdmin: req.body.isAdmin
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