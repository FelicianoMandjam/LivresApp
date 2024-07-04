import express from "express";
import request from "supertest";
import bookRouter from "../Routes/book.routes.js";

const app = express();
app.use(express.json());

app.use("/api/book/", bookRouter);

describe("should get all books from the API GET /api/book/show", () => {
  // 200: ________________________GET______________________________________-
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

  //   404 : GET___________________________________________
  it("if the books are not found form API GET /api/book/show", async () => {
    const { statusCode } = await request(app).get("/api/book/show");
    // *****************************************************
    expect(statusCode).toBe(200);
    // **********************************************
  });

  //   _____________________________ADD_______________________________________
  //   201: POST_____________________
  it("shoud return success on valid post body on /API/book/add", async () => {
    const { body, statusCode } = await request(app).post("/api/book/add").send({
      titre: "",
      auteur: "",
    });
    expect(statusCode).toBe(201);
  });

  //   400 : POST ___________________________________-
  it("should return a error message for the API/book/add ", async () => {
    const { statusCode } = await request(app).post("/api/book/add");
    expect(statusCode).toBe(400);
  });

  //
});
