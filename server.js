import express from "express";
import bodyParser from "body-parser";
import { ApiCore } from "./src/api/utilities/core.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("working");
});

app.post("/api/simplify", (req, res) => {
  if (req.body.key == process.env.INTERNAL_KEY) {
    const textData = req.body;

    const apiCore = new ApiCore({
      getSimplify: true,
      textData: textData,
    });

    apiCore
      .simplifiedResponse()
      .then((result) => res.json(result))
      .catch((err) => {
        console.error(err);
      });
  }
});



const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`listening on port http://localhost:${port}`)
);
