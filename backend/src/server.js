import express from "express";
import { routes } from "./routes/index.js";
// TODO once db exists
// import { initializeDbConnection } from "./db";

const app = express();
app.use(express.json());

// Add the routes stores in the routes/index.js folder
routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

app.get("/api/hello/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}!!`);
});

app.post("/api/hello", (req, res) => {
  res.send(`Hello ${req.body.name}!`);
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
