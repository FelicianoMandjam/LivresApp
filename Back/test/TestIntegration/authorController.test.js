// import authorRouter from "../../Routes/author.routes.js";
// import express from "express";
// import request from "supertest";

// const app = express();
// app.use(express.json());
// app.use("/api/author/", authorRouter);

// describe("should get all authors from the API /api/author/", async () => {
//   // 200______________________GET_______________________________________
//   it("should get all authors with the command GET /api/author/show", async () => {
//     const { body, statusCode } = await request(app).get("/api/author/show");
//     expect(body).toEqual(
//       expect.arrayContaining([
//         expect.objectContaining({
//           id: expect.any(Number),
//           nom: expect.any(String),
//           prenom: expect.any(String),
//           createdAt: expect.any(String),
//           updatedAt: expect.any(String),
//         }),
//       ])
//     );
//     expect(statusCode).toBe(200);
//   });

//   //   500______________________________GET_______________________________________

//   it("fail get all authors GET '/api/author/show' ", async () => {
//     const { body, statusCode } = await request(app).get("/api/author/show");

//     expect(statusCode).toBe(500);
//   });

//   //   201________________________________POST_______________________________________

//   it("sucees Post /api/author/add", async () => {
//     const { statusCode } = await request(app).post("/api/author/add").send({
//       nom: "",
//       prenom: "",
//     });
//     expect(statusCode).toBe(201);
//   });

//   // 500____________________________________POST__________________________________________
//   it("fail Post /api/author/add", async () => {
//     const { statusCode } = await request(app).post("/api/author/add");
//     expect(statusCode).toBe(500);
//   });
// });
