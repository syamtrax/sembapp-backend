import { Sequelize } from "sequelize";

const db = new Sequelize("dbs_sembapp", "syamtrax", "Cobalogin123", {
  host: "sembapp.database.windows.net",
  dialect: "mysql",
});

export default db;
