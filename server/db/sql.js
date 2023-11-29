const dotenv = require("dotenv")

dotenv.config({ path: "./config.env" });
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
    define: {
      timestamp: false,
    },
  }
);

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("mysql baglantısı yapıldı ");
  } catch (err) {
    console.log("baglantı hatası " + err);
  }
}

connect();

module.exports = sequelize;
