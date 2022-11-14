import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Document = db.define(
  "document",
  {
    namaDokumen: DataTypes.STRING,
    kategoriDokumen: DataTypes.STRING,
    deskripsiDokumen: DataTypes.STRING,
    uploadBukti: DataTypes.BLOB,
    namaPengguna: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);
export default Document;

(async () => {
  await db.sync();
})();
