import { Sequelize } from "sequelize";

const db = new Sequelize("railway", "root", "SlZ2kqiqDvVpzfola6I0", {
  host: "containers-us-west-120.railway.app",
  dialect: "mysql",
  port: 7342,
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
