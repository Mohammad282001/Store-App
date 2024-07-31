// const express = require("express");
// // const router = express.Router();
// const url = "https://fakestoreapi.com/products";

// const https = require("https");
// https.request = https.request(url, (response) => {
//     let data = "";
//     response.on("data", (chunk) => {
//         data += chunk.toString();
//     });
//     response.on("end", () => {
//         const body = JSON.parse(data);
//         console.log(body);
//     });
// });

// request.on("error", (error) => {
//     console.log("An error", error);
// });

// request.end();

// // router.get("/", (req, res) => {
// //     res.send("https://fakestoreapi.com/products") ;
// // });

// // router.post("/", (req, res) => {
// //   res.send({ data: "User created" });
// // });

// // router.put("/", (req, res) => {
// //   res.send({ data: "Updated Updated" });
// // });

// // router.delete("/", (req, res) => {
// //   res.send({ data: "User Deleted" });
// // });


