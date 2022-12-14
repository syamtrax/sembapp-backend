import express from "express";
import cors from "cors";
import Route from "./routes/Route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "https://sembapps.netlify.app",
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(Route);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server up and running...")
);
