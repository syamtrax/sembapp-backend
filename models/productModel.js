import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define(
  "product",
  {
    kodeProduk: DataTypes.INTEGER,
    namaProduk: DataTypes.STRING,
    kategoriProduk: DataTypes.STRING,
    hargaBeli: DataTypes.INTEGER,
    hargaJual: DataTypes.INTEGER,
    stokProduk: DataTypes.INTEGER,
    satuanProduk: DataTypes.STRING,
    tanggalKedaluwarsa: DataTypes.DATE,
    namaPengguna: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
export default Product;

(async () => {
  await db.sync();
})();
