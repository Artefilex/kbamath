
const Portfolio = require("../models/portfolio");
const Blog = require("../models/blog");
const slugField = require("../middleware/slugify");

async function populate() {
  const count = await Portfolio.count();
  if (count == 0) {
   
    const portfolio = await Portfolio.bulkCreate([
      {
        header: "Travel App",

        content:
          "I developed this website using React and Sass. It is a Travel application where users can sign up and shop for one or more travel packages of their choice.",
        projecturl: "https://artefilex-travel-app.netlify.app/",
      },
      {
        header: "Linkedin MainPage",
        content:
          "The LinkedIn main page project I created when I first learned React.",
        projecturl: "https://artefilex-linkedin-mainpage.netlify.app/",
      },
      {
        header: "CoinFlex",
        content:
          "CoinFlex is a project I built using React, featuring a user-friendly interface that allows users to utilize a comprehensive calculator for calculating potential earnings based on annual, monthly, and daily interest rates of selected banks. Moreover, the platform keeps users up-to-date with daily foreign exchange rates and enables them to create personalized news entries categorized under specific topics.go to the credit url and start the calculation ",
        projecturl: "https://eclectic-hummingbird-d2cdec.netlify.app/",
      },
      {
        header: "Course App",
        content:
          "A simple course website built using HTML, CSS, and JavaScript.The original owner of the design is Mr. Web Designer's YouTube channel. I made the Navbar position change based on the scroll. ",
        projecturl: "https://simple-course-app.netlify.app/",
      },
    ]);
   
  }
}

module.exports = populate;
