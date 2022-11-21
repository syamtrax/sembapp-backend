import { Sequelize } from "sequelize";

const db = new Sequelize("sembapp_db", "root", "", {
  host: "sembapp.database.windows.net",
  dialect: "mysql",
});

export default db;
