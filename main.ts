import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.send({ message: "PONG!!" });
});

app.listen(5050, () => {
  console.log("SERVER RUNNING ON PORT 5050");
});
