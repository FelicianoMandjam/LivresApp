import express from "express";
import bookRouter from "./Routes/book.routes.js";
import authorRouter from "./Routes/author.routes.js";
// import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

// app.use(cookieParser());

app.use("/api/author/", authorRouter);
app.use("/api/book/", bookRouter);

export default app;
