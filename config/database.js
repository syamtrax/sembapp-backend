import { Sequelize } from "sequelize";

const db = new Sequelize("sembapp_db", "syamtrax", "Cobalogin123", {
  host: "sembapp.database.windows.net",
  dialect: "mysql",
});

export default db;
