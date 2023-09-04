const mongoose = require("mongoose");

const dbConnectionString = process.env.DB_CONNECTION_STRING;

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbConnectionString, mongooseOptions)
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
