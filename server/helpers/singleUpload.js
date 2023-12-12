const multer = require("multer");
const path = require("path")
const storage = multer.memoryStorage()

const upload = multer({
  storage: storage,
 
  // fileFilter: (req, file, cb) => {
  //   const fileTypes = /jpeg|jpg|png|gif|pdf|JPEG|JPG|PNG|PDF/ ;
  //   const mimType = fileTypes.test(file.mimetype);
  //   const extname = fileTypes.test(path.extname(file.originalname));
  //   if (mimType && extname) {
  //     return cb(null, true);
  //   }
  //   cb("give proper files forate to upload");
  // },
}).single("image");

module.exports = upload;
