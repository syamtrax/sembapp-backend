import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Transaction = db.define(
  "transaction",
  {
    label: DataTypes.STRING,
    idtrans: DataTypes.STRING,
    paymenttype: DataTypes.STRING,
    price: DataTypes.INTEGER,
    date: DataTypes.DATE,
    member: DataTypes.STRING,
    namaPengguna : DataTypes.STRING
  },
  {
    freezeTableName: true,
  }
);
export default Transaction;

(async () => {
  await db.sync();
})();
