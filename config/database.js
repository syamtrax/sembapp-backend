import { Sequelize } from "sequelize";

const db = new Sequelize("railway", "root", "RWbRn9raro69gBHHEphO", {
  host: "containers-us-west-30.railway.app",
  dialect: "mysql",
  port: 8040,
});

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

export default db;
