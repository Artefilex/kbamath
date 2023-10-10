const Blog = require("../models/blog");
const slugField = require("../middleware/slugify");
const Skill = require("../models/skill");
const Subscribe = require("../models/subscribe");
const Portfolio = require("../models/portfolio");

exports.blog_list = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.json(blogs);
  } catch (err) {
    console.log(err);
  }
};

exports.blog_create = async (req, res) => {
  const form = req.body.form;
  try {
    await Blog.create({
      header: form.header,
      subtitle: form.subtitle,
      content: form.content,
      blogUrl: slugField(form.header),
    });
    res.send(`${form} success`);
  } catch (err) {
    console.log(err);
  }
};

exports.blog_edit = async (req, res) => {
  if (req.method === "GET") {
    const blogid = req.params.blogid;
    try {
      const blog = await Blog.findOne({
        where: {
          blogUrl: blogid,
        },
      });
      if (blog) {
        res.json(blog);
      }
    } catch (err) {
      console.log(err);
    }
  } else if (req.method === "POST") {
    const form = req.body.form;

    try {
      const blog = await Blog.findOne({ where: { id: form.id } });
      if (blog) {
        (blog.header = form.header),
          (blog.content = form.content),
          (blog.subtitle = form.subtitle),
          (blog.blogUrl = slugField(form.header));
      }
      await blog.save();
      res.send(`${form.id} blog edit`);
    } catch (err) {
      console.log(err);
    }
  }
};

exports.blog_delete = async (req, res) => {
  try {
    const deleteBlog = req.body.deleteUrl;

    const blog = await Blog.findOne({
      where: {
        id: deleteBlog,
      },
    });
    if (blog) {
      await blog.destroy();
    }
    res.send("delete success");
  } catch (err) {
    console.log(err);
  }
};

exports.panel_list = async (req, res) => {
  try {
    const skill = await Skill.findAll();
    const subscribe = await Subscribe.findAll();
    const portfoly = await Portfolio.findAll();
    const data = {
      skills: skill,
      subscribes: subscribe,
      portfolys: portfoly,
    };

    res.json(data);
  } catch (err) {
    console.log();
  }
};

exports.skill_edit = async (req, res) => {
  if (req.method === "GET") {
    const skillid = req.params.skillid;
    try {
      const skill = await Skill.findOne({
        where: {
          id: skillid,
        },
      });
      if (skill) {
        res.json(skill);
      }
    } catch (err) {
      console.log(err);
    }
  } else if (req.method === "POST") {
    const form = req.body.form;
    try {
      const skill = await Skill.findOne({
        where: {
          id: form.id,
        },
      });
      if (skill) {
        (skill.skillName = form.skillName),
          (skill.skillLevel = form.skillLevel);
      }
      skill.save();
      res.send(`${form.id} update success`);
    } catch (err) {
      console.log(err);
    }
  }
};
exports.skill_create = async (req, res) => {
  const form = req.body.form;
  console.log(form);
  try {
    await Skill.create({
      skillName: form.skillName,
      skillLevel: form.skillLevel,
    });
    res.send("skill Create");
  } catch (err) {
    console.log(err);
  }
};
exports.skill_remove = async (req, res) => {
  const deleteSkill = req.body.id;

  try {
    const skill = await Skill.findOne({
      where: {
        id: deleteSkill,
      },
    });
    if (skill) {
      await skill.destroy();
      res.send(`${deleteSkill} delete success `);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.portfoly_edit = async (req, res) => {
  if (req.method === "GET") {
    const portid = req.params.portid;
    try {
      const portfoly = await Portfolio.findOne({
        where: {
          id: portid,
        },
      });
      if (portfoly) {
        res.json(portfoly);
      }
    } catch (err) {
      console.log(err);
    }
  } else if (req.method === "POST") {
    const form = req.body.form;

    try {
      const portfolio = await Portfolio.findOne({
        where: {
          id: form.id,
        },
      });
      if (portfolio) {
        portfolio.header = form.header;
        portfolio.content = form.content;
        portfolio.projecturl = form.projecturl;
      }
      portfolio.save();
      res.send(`${form.id} update success`);
    } catch (err) {
      console.log(err);
    }
  }
};
exports.portfoly_create = async (req, res, next) => {
  const form = req.body.form;
  try {
    await Portfolio.create({
      header: form.header,
      content: form.content,
      projecturl: form.projecturl,
    });
    res.send("portfolio Create");
    next();
  } catch (err) {
    console.log(err);
  }
};
exports.portfoly_remove = async (req, res) => {
  const deleteportfoly = req.body.id;
  try {
    const portfoly = await Portfolio.findOne({
      where: {
        id: deleteportfoly,
      },
    });
    if (portfoly) {
      await portfoly.destroy();
      res.send(`${deleteportfoly} deleting success `);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.admin_login = async (req, res) => {
  const admin = req.body.form;
  console.log(admin);
  try {
    if (
      admin.name == process.env.ADMIN_NAME &&
      admin.password == process.env.ADMIN_PASSWORD
    ) {
      req.session.isAdmin = true;
      console.log("welcome boss");
      res.redirect("/");
    } else {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  } catch (err) {
    console.log(err);
  }
};
