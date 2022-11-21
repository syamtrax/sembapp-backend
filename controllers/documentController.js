import Document from "../models/documentModel.js";

export const getDocument = async (req, res) => {
  try {
    const response = await Document.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getDocumentByID = async (req, res) => {
  try {
    const response = await Document.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createDocument = async (req, res) => {
  try {
    await Document.create(req.body);
    res.status(201).json({ msg: "Document Data Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateDocument = async (req, res) => {
  try {
    await Document.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Document Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteDocument = async (req, res) => {
  try {
    await Document.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Document Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
