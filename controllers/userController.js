import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**Ambil semua data user */
export const getUser = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ["id", "namaToko", "namaPengguna"],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

/**Buat data user */
export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
};

/**update data user */
export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

/**delete data user berdasarkan ID */
export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const Register = async (req, res) => {
  const {
    namaToko,
    alamatToko,
    namaPengguna,
    sandi,
    confSandi,
    email,
    telp,
    img,
  } = req.body;
  if (sandi !== confSandi)
    return res
      .status(400)
      .json({ msg: "Kata Sandi dan Konfirmasi Kata Sandi tidak cocok" });
  const salt = await bcrypt.genSalt();
  const available = await User.findAll({
    where: {
      namaPengguna: namaPengguna,
    },
  });

  const hashPassword = await bcrypt.hash(sandi, salt);
  try {
    if (available == "") {
      await User.create({
        namaToko: namaToko,
        alamatToko: alamatToko,
        namaPengguna: namaPengguna,
        sandi: hashPassword,
        email: email,
        telp: telp,
        img: img,
      });
      res.status(201).json({ msg: "Register Berhasil" });
    } else {
      return res.status(400).json({ msg: "Nama pengguna telah digunakan!" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        namaPengguna: req.body.user,
      },
    });
    const match = await bcrypt.compare(req.body.pwd, user[0].sandi);
    if (!match) return res.status(400).json({ msg: "Kata sandi salah!" });
    const userId = user[0].id;
    const namaPengguna = user[0].namaPengguna;
    const namaToko = user[0].namaToko;

    const accessToken = jwt.sign(
      { userId, namaPengguna, namaToko },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "20s",
      }
    );
    const refreshToken = jwt.sign(
      { userId, namaPengguna, namaToko },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await User.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: false,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(400).json({ msg: "Pengguna tidak ditemukan" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(401);
  const user = await User.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await User.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
