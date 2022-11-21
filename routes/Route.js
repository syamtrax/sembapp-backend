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

router.get("/transaction", verifyToken, getTransaction);
router.get("/transaction/:id", verifyToken, getTransactionByID);
router.post("/transaction", verifyToken, createTransaction);
router.patch("/transaction/:id", verifyToken, updateTransaction);
router.delete("/transaction/:id",verifyToken, deleteTransaction);
router.get("/total",verifyToken, totalTransaction);
router.get("/totalprice", verifyToken,sumTransaction);

router.get("/user", verifyToken, getUser);
router.post("/user", Register);

router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

router.get("/produk",verifyToken, getProduct);
router.get("/produk/:kodeProduk",verifyToken, getProductByID);
router.post("/produk",verifyToken, createProduct);
router.patch("/produk/:kodeProduk", verifyToken,updateProduct);
router.delete("/produk/:kodeProduk", verifyToken,deleteProduct);

router.get("/dokumen",verifyToken, getDocument);
router.get("/dokumen/:id", verifyToken,getDocumentByID);
router.post("/dokumen", verifyToken,createDocument);
router.patch("/dokumen/:id",verifyToken, updateDocument);
router.delete("/dokumen/:id",verifyToken, deleteDocument);

export default router;
