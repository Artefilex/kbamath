const fs = require('fs').promises;

exports.deleteFile = async (filePath) => {
  try {
    await fs.unlink(filePath);
  } catch (err) {
    console.error(`Error deleting file: ${filePath}`, err);
  }
};