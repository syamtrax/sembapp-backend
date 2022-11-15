import { Sequelize } from "sequelize";

const db = new Sequelize("sembapp_db", "admin", "YBjca2xl", {
  host: "mysql-95952-0.cloudclusters.net",
  dialect: "mysql",
});

export default db;
