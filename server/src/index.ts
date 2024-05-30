import express from "express";
import Router from "./routes/route";

const app = express();
const port =  8080;
app.use(express.json());
app.use('/', Router);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });