const fs = require("fs");

// Diğer gereken modüllerin import edildiği kısımlar...

const deleteOldImage = (oldImagePath) => {
  fs.unlink(oldImagePath, (err) => {
    if (err) {
      console.error("Error deleting old image:", err);
    } else {
      console.log("Old image deleted successfully");
    }
  });
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(null, Date.now() + path.extname(file.originalname))
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimType && extname) {
      return cb(null, true);
    }
    cb("Give proper file format to upload");
  },
}).single("image");

const updateImage = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    // Eski resim dosyasının yolu
    const oldImagePath = "Images/oldImage.jpg"; // Burayı güncelleyin

    // Eğer eski bir resim dosyası varsa, onu sil
    if (fs.existsSync(oldImagePath)) {
      deleteOldImage(oldImagePath);
    }

    // Yeni resim dosyasının yolu
    const newImagePath = req.file.path;

    // İşlemler devam eder...

    return res.status(200).json({ message: "Image updated successfully" });
  });
};

module.exports = updateImage
