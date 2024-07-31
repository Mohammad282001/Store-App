const express = require("express");
const app = express();
const port = 8888;
const https = require("https");
const cors = require("cors");
app.use(cors());

app.get("/api", (req, res) => {
    const url = "https://fakestoreapi.com/products";
    https
        .get(url, (response) => {
            let data = "";
            response.on("data", (chunk) => {
                data += chunk.toString();
            });
            response.on("end", () => {
                const body = JSON.parse(data);
                console.log(body);
                res.json(body);
            });
        })
        .on("error", (error) => {
            console.log("An error occurred", error);
            res.status(500).send("An error occurred");
        });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});