import { Sequelize } from "sequelize";

const db = new Sequelize("newsembapp", "syamtrax", "Cobalogin123", {
  host: "sembappdbcoba.mysql.database.azure.com",
  dialect: "mysql",
  port: 3306,
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
  },
  dialectOptions: {
    timeout: 42,
  },
});

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

export default db;
