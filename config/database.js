import { Sequelize } from "sequelize";

const db = new Sequelize("sembapp_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
