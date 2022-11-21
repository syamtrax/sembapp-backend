import { Sequelize } from "sequelize";

const db = new Sequelize("newsembapp", "syamtrax", "Cobalogin123", {
  host: "https://sembappdbcoba.mysql.database.azure.com",
  dialect: "mysql",
  port: 3306,
});

export default db;
