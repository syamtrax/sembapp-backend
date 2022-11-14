import Product from "../models/productModel.js";

export const getProduct = async (req, res) => {
  try {
    const response = await Product.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductByID = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: {
        kodeProduk: req.params.kodeProduk,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.status(201).json({ msg: "Product Data Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        kodeProduk: req.params.kodeProduk,
      },
    });
    res.status(200).json({ msg: "Product Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        kodeProduk: req.params.kodeProduk,
      },
    });
    res.status(200).json({ msg: "Product Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
