

const Blog = require("../models/blog");
const slugField = require("../middleware/slugify");
const Education = require("../models/education");
const Nots = require("../models/nots");
const Quiz = require("../models/quiz");

async function populate() {
  const count = await Blog.count();
  if (count == 0) {
    
  }
}

module.exports = populate;
