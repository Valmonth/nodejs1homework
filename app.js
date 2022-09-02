const express = require("express");
//database init
const { db, DataTypes } = require("./utils/database.util");

const { Registrations } = require("./models/registrations.model");

const { registrationsRoutes } = require("./routes/registrations.route");

//init server
const app = express();
app.use(express.json());

//routes
app.use("/api/v1/registrations", registrationsRoutes);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    messegen: "error",
  });
});
module.exports = {
  app,
};