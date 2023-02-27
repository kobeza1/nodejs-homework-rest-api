// require("dotenv").config();
// const express = require("express");

// const mongoose = require("mongoose");
// // const app = require("../../app");
// const app = express();

// const supertest = require("supertest");

// const { DB_HOST } = process.env;

// describe("test login controller", () => {
//   beforeAll(() => async () => {
//     await mongoose.connect(DB_HOST);
//   });
//   afterAll(() => async () => {
//     await mongoose.disconnect();
//   });
//   it("should login a user", async () => {
//     // const response = await supertest(app).post("/api/auth/signup").send({
//     //   name: "Forrest Gamp",
//     //   email: "kasatka@gmail.com",
//     //   password: "123456",
//     // });
//     const response = await supertest(app).get("/api/users/");

//     expect(response.status).toBe(200);
//   });
// });
