import express from "express";
import request from "supertest";
import bookRouter from "../Routes/book.routes.js";
import authorRouter from "../Routes/author.routes.js";

const app = express();
app.use(express.json());

app.use("/api/book/", bookRouter);
// app.use("/api/author/", authorRouter);

describe("should get all books from the API GET /api/book/", () => {
  // Si tout va bien
  it("should get all books with the command GET /api/book", async () => {
    const { body, statusCode } = await request(app).get("/api/book/show");

    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          titre: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          AuthorId: expect.any(Number),
        }),
      ])
    );
    expect(statusCode).toBe(200);
  });
});
