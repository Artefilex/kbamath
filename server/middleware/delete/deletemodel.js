const { deleteFile } = require("./deleteFile");

exports.deleteImageAndDestroyModel = async (model, paramsUrl, res) => {
  try {
    const item = await model.findOne({ where: { paramsUrl } });
    if (item) {
      await deleteFile(item.image);
      await item.destroy();
    }
    res.send("delete success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};