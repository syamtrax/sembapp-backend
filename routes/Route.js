import express from "express";
import {
  getTransaction,
  getTransactionByID,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  totalTransaction,
  sumTransaction,
} from "../controllers/transactionController.js";

import {
  getUser,
  Register,
  Login,
  Logout,
} from "../controllers/userController.js";

import {
  getProduct,
  getProductByID,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import { verifyToken } from "../middle/verifyToken.js";

import { refreshToken } from "../controllers/refreshToken.js";
import {
  createDocument,
  deleteDocument,
  getDocument,
  updateDocument,
  getDocumentByID
} from "../controllers/documentController.js";

const router = express.Router();

router.get("/transaction", getTransaction);
router.get("/transaction/:id", getTransactionByID);
router.post("/transaction", createTransaction);
router.patch("/transaction/:id", updateTransaction);
router.delete("/transaction/:id", deleteTransaction);
router.get("/total", totalTransaction);
router.get("/totalprice", sumTransaction);

router.get("/user", verifyToken, getUser);
router.post("/user", Register);

router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

router.get("/produk", getProduct);
router.get("/produk/:kodeProduk", getProductByID);
router.post("/produk", createProduct);
router.patch("/produk/:kodeProduk", updateProduct);
router.delete("/produk/:kodeProduk", deleteProduct);

router.get("/dokumen", getDocument);
router.get("/dokumen/:id", getDocumentByID);
router.post("/dokumen", createDocument);
router.patch("/dokumen/:id", updateDocument);
router.delete("/dokumen/:id", deleteDocument);

export default router;
