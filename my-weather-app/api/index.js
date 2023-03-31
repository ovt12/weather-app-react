import express from "express";
import { sequelize } from "./db/index.js";
import { handleGetForecasts, handlePostForecast } from "./controller/index.js";


const app = express();
const port = process.env.PORT || 3000;

try {
  await sequelize.sync();
  app.use(express.json());

  app.get("/weather", handleGetForecasts);

  // FOR DB SEEDING FOR TESTS
  if (process.env.NODE_ENV === "TEST") {
    app.post("/weather", handlePostForecast);
  }

  app.get("/", (req, res) => {
    res.send("API is running");
  });

  app.listen(port, () => {
    console.log("Server is running on port " + port + ", Environment is " + process.env.NODE_ENV);
  });
} catch (error) {
  console.log("ERROR : " + error.message);
}

export default app;
