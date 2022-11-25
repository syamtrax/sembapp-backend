import { Sequelize } from "sequelize";

const db = new Sequelize("railway", "root", "sLFW3aNv8bnSX9324CKo", {
  host: "containers-us-west-54.railway.app",
  dialect: "mysql",
  port: 5987,
});

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

export default db;
