import Transaction from "../models/transactionModel.js";

export const getTransaction = async (req, res) => {
  try {
    const response = await Transaction.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTransactionByID = async (req, res) => {
  try {
    const response = await Transaction.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createTransaction = async (req, res) => {
  try {
    await Transaction.create(req.body);
    res.status(201).json({ msg: "Transaction Data Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTransaction = async (req, res) => {
  try {
    await Transaction.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    await Transaction.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const totalTransaction = async (req, res) => {
  try {
    const total = await Transaction.count();
    res.status(200).json(total);
  } catch (error) {
    console.log(error.message);
  }
};

export const sumTransaction = async (req, res) => {
  try {
    const total = await Transaction.sum("price");
    res.status(200).json(total);
  } catch (error) {
    console.log(error.message);
  }
};
