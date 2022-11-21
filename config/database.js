import { Sequelize } from "sequelize";

const db = new Sequelize("newsembapp", "syamtrax", "Cobalogin123", {
  host: "sembappdbcoba.mysql.database.azure.com",
  dialect: "mysql",
});

export default db;
