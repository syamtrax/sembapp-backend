import { Sequelize } from "sequelize";

const db = new Sequelize("sembapp_db", "satriasyamm", "Semogasukses123", {
  host: "sembappdb.mysql.database.azure.com",
  dialect: "mysql",
  port: 3306,
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
  },
  dialectOptions: {
    connectTimeout: 60000,
  },
  logging: false,
});

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

export default db;
